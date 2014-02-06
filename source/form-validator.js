// shorthand for $(document).ready();
$(function(){
  //Your code...

  $("form").on("submit", function(event){
    event.preventDefault()
    errors = $('#errors').children()
    if (errors.length == 0){
      alert('Submission is OK!')
    }
    else{
      var errorString = 'Cannot submit because of the following errors:\n'
      for(var i = 0; i<errors.length;i++){
        errorString += '-'+$(errors[i]).text()+'\n'
      }
      alert(errorString)
    }
  })
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

  $("input[name='password']").focusout(function () {

    if ($(this).val().match(/[A-Z]/) === null) {
      if ($("#password-capital").length === 0) {
        $("#errors").append("<li id='password-capital'>Password must have a capitAl letter</li>")
      }
    }
    else {
      if ($("#password-capital").length != 0) {
        $("#password-capital").remove()
      }
    }

    if ($(this).val().match(/[0-9]/) === null) {
      if ($("#password-number").length === 0) {
        $("#errors").append("<li id='password-number'>Password must have a number</li>")
      }
    }
    else {
      if ($("#password-number").length != 0) {
        $("#password-number").remove()
      }
    }

    if ($(this).val().length < 8) {
      if ($("#password-length").length === 0) {
        $("#errors").append("<li id='password-length'>Password must have at least 8 characters</li>")
      }
    }
    else {
      if ($("#password-length").length != 0) {
        $("#password-length").remove()
      }
    }
  })
});