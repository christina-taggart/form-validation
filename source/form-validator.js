// shorthand for $(document).ready();
$(function(){
  //Your code...
$("input[name='email']").focusout(function () {

  if ($(this).val().match(/^[a-zA-z0-9\.]+@[a-zA-z0-9]+\.[a-zA-z]+$/) === null){
    if ($("#email-error").length === 0){
      $("#errors").append("<li id='email-error'>Email invalid</li>")
    }
  }
  else {
    if ($("#email-error").length != 0){
      $("#email-error").remove()
    }
  }
})


});


// When the user clicks the "Sign Up" button
//     They should be notified if any of the following conditions are NOT true
//     - The email conforms to the standard pattern
//     - The password has at least 8 characters
//     - The password has at least one capital letter
//     - The password has at least one numeric character

//     If any of the above conditions are false
//     - The form is not allowed to be submitted
//     - Error messages are dislpayed