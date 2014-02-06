// shorthand for $(document).ready();
$(function(){

errors = []
});
userForm = document.forms["sign_up"]



userForm.addEventListener("submit", function(e){
  e.preventDefault();
  validate();
})

function validate(){
  validateEmail();
  validatePassword();
  if (errors.length != 0){
    var body = document.getElementsByTagName('body')[0];
    var list = document.createElement('ul')
    for (var i=0; i<errors.length; i++){
      error = document.createElement('li')
      error.innerHTML = errors[i]
      list.appendChild(error)
    }
    body.appendChild(list);
    errors = []
  }
  else
  {
    userForm.submit();
  }
}

function validateEmail(){
  var email = userForm["email"].value
  regex = new RegExp('^.+@.+\..{2,}$')
  if (!regex.test(email)){
    errors.push("That is not a valid email address.")
  }
}

function validatePassword(){
  var password = userForm["password"].value
  if (password.length < 8 ){
    errors.push("Password must be at least 8 characters in length");
  }
  if (!password.match(/[A-Z]/)){
    errors.push("Password must contain at least one capital letter");
  }
  if (!password.match(/[0-9]/)){
    errors.push("Password must have at least one numeric character");
  }
}