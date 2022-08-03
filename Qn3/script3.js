const hidden = {
    fieldName:"Full Name:",
    fieldEmail:"Email:",
    fieldPhoneNum:"Phone:",
    fieldTeleId:"Telegram:"
  };

function showHideName() {
    var a = document.getElementById(steveFullName);
    if (a.innerHTML == "Full Name: Steve Tan") {
        return a.innerHTML = hidden.fieldName;
    } else { 
        a.innerHTML = steveFullName;
    }
}