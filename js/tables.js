// http://web.gps.caltech.edu/~tsai/files/HartBoschTsai_2000.pdf 
// Credit for these tables goes to Melanie Hart, Robert Bosch, and Elbert Tsai

// These are modified versions of the tables noted in the paper above. In addition to the
// tables provided in the paper, the tables below include difficulties for transitions
// between the same note (interval = 0, assigned in the first column), and also assigns a i
// difficulty rating of 6 to all fingering transitions not assigned in the original table.

// d[`${s},${t}`][u] = the difficulty of using finger s on the lower note and finger t 
// on the upper note with interval size i between notes. Note: interval size is represented in
// half notes/semitones. For more information on how to read these tables, see the paper
// linked above

// Table 1.
// Lower white, upper white
var dLowerWhiteUpperWhite = {
    "1,2": [4,1,1,1,1,1,1,1,2,2,2,2,3],
    "1,3": [4,1,1,1,1,1,1,1,1,1,2,2,3],
    "1,4": [4,2,2,1,1,1,1,1,1,1,1,1,2],
    "1,5": [4,3,3,2,2,1,1,1,1,1,1,1,1],
    "2,1": [4,2,2,3,3,4,4,4,4,4,4,4,4],
    "2,3": [4,1,1,1,1,2,2,3,3,3,3,3,3],
    "2,4": [4,2,2,1,1,1,1,2,3,3,3,3,3],
    "2,5": [4,3,3,2,2,1,1,1,1,1,2,2,2],
    "3,1": [4,2,2,3,3,4,4,4,4,4,4,4,4],
    "3,4": [4,1,1,2,2,3,3,3,3,3,3,3,3],
    "3,5": [4,3,3,1,1,1,1,3,3,3,3,3,3],
    "4,1": [4,2,2,4,4,4,4,4,4,4,4,4,4],
    "4,5": [4,1,1,1,1,3,3,3,3,3,3,3,3],
    "5,1": [4,4,4,4,4,4,4,4,4,4,4,4,4],

    "3,2": [4,6,6,6,6,6,6,6,6,6,6,6,6],
    "4,2": [4,6,6,6,6,6,6,6,6,6,6,6,6],
    "4,3": [4,6,6,6,6,6,6,6,6,6,6,6,6],
    "5,2": [4,6,6,6,6,6,6,6,6,6,6,6,6],
    "5,3": [4,6,6,6,6,6,6,6,6,6,6,6,6],
    "5,4": [4,6,6,6,6,6,6,6,6,6,6,6,6],

    "1,1": [1,6,6,6,6,6,6,6,6,6,6,6,6],
    "2,2": [1,6,6,6,6,6,6,6,6,6,6,6,6],
    "3,3": [1,6,6,6,6,6,6,6,6,6,6,6,6],
    "4,4": [1,6,6,6,6,6,6,6,6,6,6,6,6],
    "5,5": [1,6,6,6,6,6,6,6,6,6,6,6,6],
}

// Table 2.
// Lower white, upper black
var dLowerWhiteUpperBlack = {
    "1,2": [4,1,1,1,1,1,1,1,1,2,2,3,NaN],
    "1,3": [4,1,1,1,1,1,1,1,1,1,1,2,NaN],
    "1,4": [4,2,2,2,1,1,1,1,1,1,1,1,NaN],
    "1,5": [4,3,3,3,2,2,2,1,1,1,1,1,NaN],
    "2,1": [4,4,4,4,4,4,4,4,4,4,4,4,NaN],
    "2,3": [4,1,1,1,2,2,3,3,3,3,3,3,NaN],
    "2,4": [4,2,1,1,1,1,2,2,2,3,3,3,NaN],
    "2,5": [4,3,2,2,2,2,1,1,1,2,2,3,NaN],
    "3,1": [4,4,4,4,4,4,4,4,4,4,4,4,NaN],
    "3,4": [4,1,1,1,3,3,3,3,3,3,3,3,NaN],
    "3,5": [4,3,2,2,2,2,2,3,3,3,3,3,NaN],
    "4,1": [4,4,4,4,4,4,4,4,4,4,4,4,NaN],
    "4,5": [4,2,2,2,2,3,3,3,3,3,3,3,NaN],
    "5,1": [4,4,4,4,4,4,4,4,4,4,4,4,NaN],
             
    "3,2": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "4,2": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "4,3": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,2": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,3": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,4": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
                                     
    "1,1": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "2,2": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "3,3": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "4,4": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,5": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
}

// Table 3.
// Lower Black, Upper White
var dLowerBlackUpperWhite = {
    "1,2": [4,3,2,2,1,1,2,2,2,3,3,3,NaN],
    "1,3": [4,3,2,2,1,1,1,2,2,2,2,3,NaN],
    "1,4": [4,3,3,3,1,1,1,1,1,2,2,2,NaN],
    "1,5": [4,3,3,3,2,2,2,1,1,1,1,1,NaN],
    "2,1": [4,2,3,3,4,4,4,4,4,4,4,4,NaN],
    "2,3": [4,1,1,1,2,2,3,3,3,3,3,3,NaN],
    "2,4": [4,2,1,1,1,1,2,3,3,3,3,3,NaN],
    "2,5": [4,3,2,2,1,1,1,1,1,1,1,2,NaN],
    "3,1": [4,2,3,3,4,4,4,4,4,4,4,4,NaN],
    "3,4": [4,1,1,1,3,3,3,3,3,3,3,3,NaN],
    "3,5": [4,2,1,1,1,1,1,2,2,3,3,3,NaN],
    "4,1": [4,3,4,4,4,4,4,4,4,4,4,4,NaN],
    "4,5": [4,1,1,1,2,2,3,3,3,3,3,3,NaN],
    "5,1": [4,3,4,4,4,4,4,4,4,4,4,4,NaN],
             
    "3,2": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "4,2": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "4,3": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,2": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,3": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,4": [4,6,6,6,6,6,6,6,6,6,6,6,NaN],
                                     
    "1,1": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "2,2": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "3,3": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "4,4": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],
    "5,5": [1,6,6,6,6,6,6,6,6,6,6,6,NaN],

}

// Table 4.
// Lower Black, Upper Black
var dLowerBlackUpperBlack = {
    "1,2": [4,NaN,2,2,2,2,NaN,3,3,3,3,NaN,3],
    "1,3": [4,NaN,2,2,2,2,NaN,2,2,2,2,NaN,2],
    "1,4": [4,NaN,3,2,2,2,NaN,2,1,1,1,NaN,2],
    "1,5": [4,NaN,3,3,3,3,NaN,2,1,1,1,NaN,1],
    "2,1": [4,NaN,2,3,3,4,NaN,4,4,4,4,NaN,4],
    "2,3": [4,NaN,1,1,1,2,NaN,3,3,3,3,NaN,3],
    "2,4": [4,NaN,2,1,1,1,NaN,2,3,3,3,NaN,3],
    "2,5": [4,NaN,3,2,2,1,NaN,1,1,1,2,NaN,2],
    "3,1": [4,NaN,3,4,4,4,NaN,4,4,4,4,NaN,4],
    "3,4": [4,NaN,1,1,1,2,NaN,3,3,3,3,NaN,3],
    "3,5": [4,NaN,3,1,1,2,NaN,3,3,3,3,NaN,3],
    "4,1": [4,NaN,4,4,4,4,NaN,4,4,4,4,NaN,4],
    "4,5": [4,NaN,2,2,2,3,NaN,3,3,3,3,NaN,3],
    "5,1": [4,NaN,4,4,4,4,NaN,4,4,4,4,NaN,4],
                 
    "3,2": [4,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "4,2": [4,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "4,3": [4,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "5,2": [4,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "5,3": [4,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "5,4": [4,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
                       
    "1,1": [1,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "2,2": [1,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "3,3": [1,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "4,4": [1,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
    "5,5": [1,NaN,6,6,6,6,NaN,6,6,6,6,NaN,6],
     
}

Object.freeze(dLowerWhiteUpperWhite);
Object.freeze(dLowerWhiteUpperBlack);
Object.freeze(dLowerBlackUpperWhite);
Object.freeze(dLowerBlackUpperBlack);

export {dLowerWhiteUpperWhite, dLowerBlackUpperWhite, dLowerWhiteUpperBlack, dLowerBlackUpperBlack} 