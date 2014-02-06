// shorthand for $(document).ready();
$(function(){
  $('#submit').on('click', function(event){
    event.preventDefault()
    var emailPattern = new RegExp ("(.*)@(.*)[.](com)|(edu)|(gov)|(net)", 'i')

    var validEmail = emailPattern.test(document.getElementById('email').value)
    if(validEmail){

    } else {
      $('#errors').append("<li>Please enter a valid email</li>")
    }
    var passwordCapital = new RegExp ("[A-Z]")
    var passwordNumeric = new RegExp ("[0-9]")
    var validCapital = passwordCapital.test(document.getElementById('password').value)
    var validNumeric = passwordNumeric.test(document.getElementById('password').value)
    var validLength = document.getElementById('password').value.length >= 8
    if(validCapital){

    } else {
      $('#errors').append("<li>Your password needs a capital letter</li>")
    }
    if(validNumeric){

    } else {
      $('#errors').append("<li>Your password needs to contain a number</li>")
    }
    if(validLength){

    } else {
      $('#errors').append("<li>Your password needs to have at least 8 characters</li>")
    }
  })

});

    // When the user clicks the "Sign Up" button
    // They should be notified if any of the following conditions are NOT true
    // - The email conforms to the standard pattern
    // - The password has at least 8 characters
    // - The password has at least one capital letter
    // - The password has at least one numeric character

    // If any of the above conditions are false
    // - The form is not allowed to be submitted
    // - Error messages are dislpayed