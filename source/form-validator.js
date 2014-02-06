// shorthand for $(document).ready();
$(function(){
  //Your code...



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


 var emailTester = function(email) {
    var emailText = new RegExp(/.+@.+\..{2,}/)
    return emailText.test(email)
 }