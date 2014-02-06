// shorthand for $(document).ready();
$(function(){
  $('#submit').on('click', function(event){
    event.preventDefault()
    var emailPattern = new RegExp ("(.*)@(.*)[.](com)|(edu)|(gov)|(net)", 'i')

    var validEmail = emailPattern.test(document.getElementById('email').value)
    if(validEmail){
      alert('This worked')
    } else {
      alert('Email invalid')
    }
    var passwordCapital = new RegExp ("[A-Z]")
    var passwordNumeric = new RegExp ("[0-9]")
    var validCapital = passwordCapital.test(document.getElementById('password').value)
    var validNumeric = passwordNumeric.test(document.getElementById('password').value)
    var validLength = document.getElementById('password').value.length >= 8
    if(validCapital){
      alert('Valid Capital')
    } else {
      alert('Invalid Capital')
    }
    if(validNumeric){
      alert('Valid Number')
    } else {
      alert('Invalid Number')
    }
    if(validLength){
      alert('Valid Length')
    } else {
      alert('Invalid Length')
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