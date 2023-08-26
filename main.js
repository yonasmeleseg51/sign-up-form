function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-Password").value;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return false;
    }
    return true;
  }