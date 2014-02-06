// shorthand for $(document).ready();
$(function(){
  $("#user-form").on('submit', function(e){
    e.preventDefault();
    var email = $(this).find("input[name=email]").val();
    var password = $(this).find("input[name=password]").val();
    validateEmail(email);
    validatePassword(password);
  });
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      $("#errors").append("<li>Must be a valid emial address</li>");
    }
}

function validatePassword(password){
  var reNum = /\d/;
  if(!reNum.test(password)){
    $("#errors").append("<li>Password must have at least one numeric character (0-9)</li>");
  }

  var reCap = /[A-Z]/;
  if(!reCap.test(password)){
   $("#errors").append("<li>Password must have at least one capital letter</li>");
  }

  if(password.length < 8){
    $("#errors").append("<li>Password must be at least 8 characters long</li>");
  }
}