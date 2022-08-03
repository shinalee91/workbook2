let oldEmail = document.getElementById("steveEmail");
let steveNewEmail = document.getElementById("inputEmail").form.id;

function switchEmail() {
    var a = document.getElementById("steveEmail");
    if (a.innerHTML === "Email: steve.tan@gmail.com") {
    a.innerHTML = "Email: " + steveNewEmail;
} else {
    a.innerHTML = oldEmail;
}

}