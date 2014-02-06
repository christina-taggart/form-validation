// shorthand for $(document).ready();
$(function(){
  //Your code...
  $('form').on('submit', function(event) {
    event.preventDefault();
    var email = $(this).find("input[name='email']").val()
    var password = $(this).find("input[name='password']").val()
    if (!emailTester(email)) {
      appendError("<li> Please enter a valid email address </li>")
    }
    if (!passwordLengthTester(password)) {
      appendError("<li> Your password must be at least 8 characters </li>")
    }
    if (!passwordCapitalTester(password)) {
      appendError("<li> Your password must contain a capital letter </li>")
    }
    if (!passwordNumberTester(password)) {
      appendError("<li> Your password must contain a number </li>")
    }
  })


});

 // When the user clicks the "Sign Up" button
 //    They should be notified if any of the following conditions are NOT true
 //    - The email conforms to the standard pattern
 //    - The password has at least 8 characters
 //    - The password has at least one capital letter
 //    - The password has at least one numeric character

 //    If any of the above conditions are false
 //    - The form is not allowed to be submitted
 //    - Error messages are dislpayed

var appendError = function(message) {
  $('#errors').append(message)
}

var emailTester = function(email) {
  var emailText = new RegExp(/.+@.+\..{2,}/)
  return emailText.test(email)
}

var passwordLengthTester = function(password) {
var passwordLengthText = new RegExp(/.{8,}/)
return passwordLengthText.test(password)
}

var passwordCapitalTester = function(password) {
var passwordCapitalText = new RegExp(/[A-Z]/)
return passwordCapitalText.test(password)
}

var passwordNumberTester = function(password) {
var passwordNumberText = new RegExp(/\d/)
return passwordNumberText.test(password)
}