const person = {
    firstName:"Steven", 
    lastName:"Tan", 
    email: "steve.tan@gmail.com", 
    phone: "93851853",
    telegram: "@steven.tan"
};

function showProf() {
    var a = document.getElementById("fullName");
    if (a.innerHTML == " ") {
        a.innerHTML = "Full Name: " + person.firstName + " " + person.lastName;
    } else {
        a.innerHTML = " ";
    }

    var b = document.getElementById("email");
    if (b.innerHTML == " ") {
        b.innerHTML = "Email: " + person.email;
    } else {
        b.innerHTML = " ";
    }

    var c = document.getElementById("phoneNum");
    if (c.innerHTML == " ") {
        c.innerHTML = "Phone: " + person.phone;
    } else {
        c.innerHTML = " ";
    }

    var d = document.getElementById("teleId");
    if (d.innerHTML == " ") {
        d.innerHTML = "Telegram: " + person.telegram;
    } else {
        d.innerHTML = " ";
    }
    
}