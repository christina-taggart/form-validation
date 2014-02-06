$(function(){
  $('#submit_form').on('submit', function(event){
    event.preventDefault();
    $("#errors").empty();
    var email_text = $('#email').val();
    var password_text = $('#password').val();

    if (email_text.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) === null) {
      $("#errors").append("<li>Must be a valid email address</li>")
    }
    if (password_text.match(/.{8,}/) === null) {
      $("#errors").append("<li>Password must be at least 8 characters long</li>")
    }
    if (password_text.match(/[A-Z]+/) === null) {
      $("#errors").append("<li>Password must have at least one capital letter</li>")
    }
    if (password_text.match(/\d+/) === null) {
      $("#errors").append("<li>Password must have at least one numeric character (0-9)</li>")
    }
  })
});