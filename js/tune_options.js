
document.getElementById("nav-saved-tab").addEventListener("click", abc_string_change)
let abc_saved_string = {{tune.abc_string|tojson}};
function abc_string_change() {
    document.getElementById("abc").value = abc_saved_string;
    ABCJS.renderAbc("paper0", abc_saved_string, {});
}

document.getElementById("nav-posted-tab").addEventListener("click", abc_string_change2)
let abc_posted_string = {{tune.posted_abc_string|tojson}};
function abc_string_change2() {
    document.getElementById("abc").value = abc_posted_string;
    ABCJS.renderAbc("paper0", abc_posted_string, {});
}
