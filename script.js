var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("phoneError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var formError = document.getElementById("formError");

function validateName() {
  var inputName = document.getElementById("input-name").value;
  if (inputName.length == 0) {
    nameError.innerHTML = "This field should be completed";
    return false;
  }
  if (!inputName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  } else {
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}
function validatePhone() {
  var inputPhone = document.getElementById("input-phone").value;
  if (inputPhone.length == 0) {
    phoneError.innerHTML = "this field is required";
    return false;
  }
  if (inputPhone.length !== 10) {
    phoneError.innerHTML = "the phone number must have 10 digits";
    return false;
  }
  if (!inputPhone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateEmail() {
  var inputEmail = document.getElementById("input-email").value;
  if (inputEmail.length == 0) {
    emailError.innerHTML = "this field is required";
    return false;
  }
  if (!inputEmail.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "not in correct format";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateMessage() {
  var inputMessage = document.getElementById("message").value;
  var required = 30;
  var left = required - inputMessage.length;
  if (left > 0) {
    messageError.innerHTML = left + "more characters are needed";
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function submit() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    formError.innerHTML = "fix the errors before submitting";
    return false;
  }
}
