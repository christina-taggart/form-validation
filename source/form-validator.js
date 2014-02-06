// shorthand for $(document).ready();
$(function(){
  var $errors = $('#errors');
  $('form').submit(function(e){
    e.preventDefault();
    $errors.children().remove();
    validateFields();
  })
    function validateFields(){
      var password = $('#user_password').val();
      var email = $('#user_email').val();
      if(!email.match(/^.+@.+\..+$/)){
        errorGenerator("Email not valid");
      }
      if(!password.match(/\d/)){
        errorGenerator("Password must have at least one digit");
      }
      if(!password.match(/[A-Z]/)){
        errorGenerator("Password must have at least one capital letter");
      }
      if(password.length < 8){
        errorGenerator("Password must be at least 8 characters long");
      }
      function errorGenerator(errorMessage){
        $errors.append("<li>" + errorMessage + "</li>");
      }
    }
});