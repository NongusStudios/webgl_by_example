// Set buttons


document.getElementById("editor").addEventListener("keydown", function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        if(!e.shiftKey)
            this.value = this.value.substring(0, start) +
                "    " + this.value.substring(end);

        // put caret at right position again
        if(e.shiftKey)
            this.selectionStart =
                this.selectionEnd = start - 4;
        else
            this.selectionStart =
                this.selectionEnd = start + 4;
    }

});

// Line numbers
function nu(v){
    const numberOfLines = v.split('\n').length

    document.getElementById("line-numbers").innerHTML = Array(numberOfLines)
        .fill('<span></span>')
        .join('')
}

document.getElementById("editor").addEventListener("keyup", event => {
    nu(event.target.value);
})

document.getElementById("editor").value = document.getElementById("src").innerHTML;
nu(document.getElementById("editor").value)

function rebuild(){
    /*
        let body = document.getElementById("body");
        let script = document.getElementById("src");
        body.removeChild(script);
        let new_script = document.createElement("script")
        new_script.innerHTML = document.getElementById("editor").innerHTML;
        body.appendChild(new_script);
        script = new_script;*/

    eval(document.getElementById("editor").value);
}