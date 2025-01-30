function genPass(len, lower, upper, nums, special) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    let chars = ""; // Start empty

    if (lower) chars += lowerChars;
    if (upper) chars += upperChars;
    if (nums) chars += numChars;
    if (special) chars += specialChars;

    // If no checkbox is selected, show an alert and return
    if (chars === "") {
        alert("Please select at least one option!");
        return "";
    }

    let pass = "";
    for (let i = 0; i < len; i++) {
        const randIdx = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(randIdx);
    }

    return pass;
}

function generate() {
    const lenInput = document.getElementById("len");

    if (!lenInput.checkValidity()) {
        alert("Please enter a valid password length (minimum 6).");
        return;
    }

    const len = parseInt(lenInput.value);
    const lower = document.getElementById("lower").checked;
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;

    const pass = genPass(len, lower, upper, nums, special);
    document.getElementById("passOut").textContent = pass ? pass : "Error generating password!";
}

function reset() {
    document.getElementById("len").value = 12;
    document.getElementById("lower").checked = true;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true;
    document.getElementById("passOut").textContent = "Password is";
}
