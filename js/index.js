import {dLowerWhiteUpperWhite, dLowerBlackUpperWhite, dLowerWhiteUpperBlack, dLowerBlackUpperBlack} from './tables.js'

let abc = document.getElementById("abc");
let loading = document.getElementById("loading");
let warning = document.getElementById("fingeringWarning");
let dataIn;
let justAddedFingering = false;
const NUM_FINGERS = 5;

document.getElementById("getFingering").addEventListener("click", addFingering);

// finds fingerings for the current input state
function addFingering() {
    // if (justAddedFingering) {
    //     // warning.style.color = "blue";
    //     // warning.style.border = "2px solid blue";
    //     warning.textContent = "Fingering Already Added";
    //     setTimeout(() => {
    //         warning.textContent = "";
    //         // warning.style.color = "";
    //         // warning.style.border = "";
    //     }, 2000);
    // } else {
        try {
            dataIn = abc.value;
            let pitches = adjustPitches(getPitchesFromABCjs());
            let fingeringArray = getFingering(pitches);
            renderMusicNotation(fingeringArray);
            justAddedFingering = true;
        } catch (err) {
            warning.textContent = "Failed: Try Simpler Input";
            setTimeout(() => {warning.textContent = "";}, 2000);
        }
    // }
}

// Captures pitches from abcjs library
// Pitches are modified to account for sharps and flats
// Note: This function assumes all accidentals are explicitly inputted for each note
//   using the '^' and '_' abc notation
//   Accidentals specified from a key are not carried throughout the piece.
//   Moreover, sharps and flats do not carry though each measure. Accidentals must
//   be explicitly inputed for each note to get an accurate pitch representation.
function getPitchesFromABCjs() {
    let pitches = [];
    let tuneObjectArray = ABCJS.renderAbc("paper0", dataIn, {});
    console.log(tuneObjectArray);
    tuneObjectArray[0].lines.forEach(line => {
        line.staff[0].voices[0].forEach(pitch => {
            if (pitch.el_type == "note" && pitch.pitches) {
                let note = pitch.pitches[0];
                let accidental = note.accidental;
                if (accidental == "sharp") {
                    note.pitch += 0.5;
                    pitches.push(note.pitch);
                } else if (accidental == "flat") {
                    note.pitch -= 0.5;
                    pitches.push(note.pitch);
                } else {
                    pitches.push(note.pitch);
                }
            }
        })
    })
    return pitches;

}

// convert pitches array captured from abcjs library into a format we like
// resulting pitches represent semitones (half steps) away from middle C
// B to C is a half step, and E to F is a half step; the abcjs lib encodes them
// as whole steps
function adjustPitches(pitches) {
    pitches = pitches.map(num => num * 2)
    console.log(pitches);
    pitches = pitches.map(num => {
        let octave_rel_to_middle_c = Math.floor(num/14);
        if (num % 14 == 0) { //any note c
            return num - num/7;
        } else if (num >= 0) { //above middle C
            if (num % 14 <= 4) { //note c# to e
                return num - octave_rel_to_middle_c * 2;
            } else { //note f to b
                return num - octave_rel_to_middle_c * 2 - 1;
            }
        } else { //below middle C
            if (Math.abs(num % 14) >= 10) { //note c# to e
                console.log('here')
                return num - (octave_rel_to_middle_c + 1) * 2 + 2
            } else { //note f to b
                console.log('here2')
                return num - (octave_rel_to_middle_c + 1) * 2 + 1
            }
        }
    });
    console.log(pitches);
    pitches.forEach(pitch =>  {
        let note = new Pitch(pitch)
        console.log(note.getNote())
    })
    return pitches
}

// Dynamic programming approach to finding the optimal fingering sequence for a C
// sequence of pitches represented as semitones from Middle C
function getFingering(pitches) {
    let numNotes = pitches.length;
    let dp = Array(numNotes).fill(NaN).map(x => Array(NUM_FINGERS).fill(0));
    let parent = Array(numNotes).fill(NaN).map(x=> Array(NUM_FINGERS).fill(-1));

    // i represents the current note
    for (let i = numNotes - 2; i>=0; i--) {
        let currNote = new Pitch(pitches[i]);
        let nextNote = new Pitch(pitches[i+1]);
        let dist = nextNote.pitch - currNote.pitch;
        let abs_dist = Math.abs(dist);
        let d = getCorrectDifficultyTable(currNote, nextNote); //difficulty table


        // j represents current finger (minus 1 bc of zero indexing)
        for (let j = 0; j < NUM_FINGERS; j++) {
            let difficulties = [];

            // notes are more than an octave (12 semitones) apart
            if (abs_dist > 12)  {
                difficulties = dp[i+1].map(x => x+6) //default difficulty of 6

            // going up in pitch
            } else if (dist > 0) {
                // k represents next finger (minus 1)
                for (let k = 0; k < NUM_FINGERS; k++) {
                    difficulties.push(dp[i+1][k] + d[`${j+1},${k+1}`][abs_dist]);
                }

            // going down in pitch
            } else {
                // k represents next finger (minus 1)
                for (let k = 0; k < NUM_FINGERS; k++) {
                    difficulties.push(dp[i+1][k] + d[`${k+1},${j+1}`][abs_dist]);
                }
            }

            dp[i][j] = Math.min(...difficulties);
            parent[i][j] = difficulties.indexOf(Math.min(...difficulties));
        }
    }

    // fings min cost and then finds fingering by looking at parent reference array
    let fingeringArray = []
    let curr_parent = dp[0].indexOf(Math.min(...dp[0]));
    for (let i = 0; i < numNotes ; i++) {
        fingeringArray.push(curr_parent);
        curr_parent = parent[i][curr_parent];
    }

    // adds 1 to adjust for zero indexing
    fingeringArray = fingeringArray.map(finger => finger + 1);
    return fingeringArray;
}

function getCorrectDifficultyTable(currNote, nextNote) {

    if (!currNote.isBlackNote() && !nextNote.isBlackNote()) { //both notes white
        return dLowerWhiteUpperWhite;
    } else if (currNote.isBlackNote() && nextNote.isBlackNote()) { //both notes black
        return dLowerBlackUpperBlack;
    } else { // one black, one white
        let blackNote = (currNote.isBlackNote())? currNote : nextNote;
        let whiteNote = (currNote.isBlackNote())? nextNote : currNote;
        return (blackNote.pitch > whiteNote.pitch)? dLowerWhiteUpperBlack : dLowerBlackUpperWhite;
    }

}
// pitch is encoded as semitones away from Middle C
// aka notes below Middle C should have a negative pitch
class Pitch {
    constructor(pitch) {
         this.pitch = pitch;
    }
    getNote() {
        const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
        if (this.pitch >= 0) {//Middle C or above
           return notes[this.pitch % 12];
        } else { //below middle c
            let index = (this.pitch % 12 == 0)? 0 : 12 + this.pitch % 12;
            return notes[index];
        }
    }
    isBlackNote() {
        return (["C#","D#","F#","G#","A#"].includes(this.getNote()));
    }
}


function renderMusicNotation(fingeringArray) {
    //[C,S,X,R,L,T,A,M,Q,K]
    const regex = /%%.*\n|%.*\n|[A-Z]:.*\n|{[^}]+}|"[^"]*"|([\^_=]?[a-gA-G][,']*\d?)/g;
    let i = 0;
    let dataOut = dataIn.replace(regex, function(m, group1) {
        if (!group1) return m;
        else if (i>=fingeringArray.length) return m;
        else return `"${fingeringArray[i++]}"${m}`;
    });
    if (i>fingeringArray.length) { //something went wrong
        warning.textContent = "Try Simpler Input";
        setTimeout(() => {warning.textContent = ""}, 2000);
    } else {
        console.log(dataOut)
        ABCJS.renderAbc("paper0", dataOut, {});
    }
}


document.getElementById("abc").addEventListener("input", () => justAddedFingering = false);


document.getElementById("removeFingering").addEventListener("click", removeFingering);

function removeFingering() {
     if (justAddedFingering) {
        ABCJS.renderAbc("paper0", dataIn, {});
        justAddedFingering = false;
     } 
    // else {
    //     warning.textContent = "No Fingering Exists";
    //     setTimeout(() => warning.textContent = "", 2000);
    //  }
}

