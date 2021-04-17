document.getElementById("submitNum").onclick = validate;

function validate() {
    // reset errors
    let isValid = true;
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }

    // validate that a positive number greater was input
    let iNumber = document.getElementById("iNumber").value;
    if (iNumber < 1 || isNaN(iNumber)) {
        let errNum = document.getElementById("err-iNumber");
        errNum.style.display = "inline";
        isValid = false;
    }

    if (isValid) {
        process();
     }
}

function process() {

    let outputText = document.getElementById("outputText");
    let iNum = document.getElementById("iNumber").value;
    outputText.innerHTML = "";
    for (let i = 1; i <= iNum ; i++) {
        if(i%3 === 0 && i%5 === 0) {
            outputText.innerHTML +="Hee Haw!<br>";
        } else if (i%3 === 0) {
            outputText.innerHTML +="Hee!<br>";
        } else if (i%5 === 0) {
            outputText.innerHTML +="Haw!<br>";
        } else {
            outputText.innerHTML += i+"<br>";
        }
    }
}