let username;
let email;
let password;
let phone;
let confirmpass;

document.getElementById("submit").onclick = function() {
    username = document.getElementById("fullname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    phone = document.getElementById("phone").value;
    confirmpass = document.getElementById("confirmpass").value;
    if (password != confirmpass ) {
        window.alert("Password is not identical to the confirmation !");
    }
    else {
        if (document.getElementById("check").checked) {
            if (username != "" && email != "" && password != "" && phone != "") {
                document.getElementById("response").textContent = `Welcome ${username} :)`;
            }
        }
        else {
            window.alert("Read and agree to the Terms and Conditions !");
        }
    }
    
}
document.getElementById("reset").onclick = function() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("response").value = "";
}
