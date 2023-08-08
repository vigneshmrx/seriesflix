const showShadow = () => {
    const contactBox = document.getElementById("contact");
    contactBox.style.boxShadow = "10px 10px #003049";
}

const hideShadow = () => {
    const contactBox = document.getElementById("contact");
    contactBox.style.boxShadow = "none";
}

// let contactBox = document.getElementById("contact");

// contactBox.addEventListener("focus", () => {
//     contactBox.style.boxShadow = "10px 10px #003049";
// });

const everythingFilledChecking = () => {
    let nameTag = document.getElementById("nameBox");
    let emailTag = document.getElementById("emailBox");
    let textTag = document.getElementById("textBox");
    if ((nameTag.value != null && nameTag.value != "" ) && (emailTag.value != null && emailTag.value != "" ) && (textTag.value != null && textTag.value != "")) {
        return 1;
    } else {
        return 0;
    }
}

const emailCorrectChecker = () => {
    let emailTag = document.getElementById("emailBox");
    if (emailTag.value.includes("@") && emailTag.value.includes(".com")) {
        return 1;
    } else {
        return 0;
    }
}

const removeText = () => {
    let nameTag = document.getElementById("nameBox");
    let emailTag = document.getElementById("emailBox");
    let textTag = document.getElementById("textBox");
    let submitButton = document.getElementById("submitBtn");
    if (everythingFilledChecking()) {
        if (nameTag.value.includes("@") || nameTag.value.includes(".com") || nameTag.value.includes("0") || nameTag.value.includes("1") || nameTag.value.includes("2") || nameTag.value.includes("3") || nameTag.value.includes("4") || nameTag.value.includes("5") || nameTag.value.includes("6") || nameTag.value.includes("7") || nameTag.value.includes("8") || nameTag.value.includes("9")) {
            alert("Please enter a valid name");
        }
        else if (emailCorrectChecker()) {
            nameTag.value = "";
            emailTag.value = "";
            textTag.value = "";
            alert("This is a dummy contact page. Thank You!");
            submitButton.style.visibility = "hidden";
        } else {
            alert("Please enter a valid email");
        }
    } else {
        submitButton.style.visibility = "hidden";
        alert("Please fill all the required details!");
    }
}

const checkText = () => {
    let submitButton = document.getElementById("submitBtn");
    if (everythingFilledChecking()) {
        submitButton.style.visibility = "visible";
    } else {
        alert("Please fill all the required details!");
    }
}