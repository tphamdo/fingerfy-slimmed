function initEditor() {
    new ABCJS.Editor("abc", {
        paper_id: "paper0",
        synth: {
            el: "#audio",
            options: {
                displayLoop: true,
                displayRestart: true,
                displayPlay: true,
                displayProgress: true,
                displayWarp: true }
        },
        generate_warnings: true,
        generate_midi: true,
        warnings_id:"warnings",
        abcjsParams: {
            generateDownload: true,
            generateInline: true,
            downloadLabel:"Download MIDI",
            paddingleft:0,
            paddingright:0,
        },
    });
}

window.addEventListener("load", initEditor, false);

