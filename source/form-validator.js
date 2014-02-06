// shorthand for $(document).ready();
$(function(){

  var valid_input = true;

  var is_valid_email = function(email) {
    var valid_email = false;
    if (!email.match(/\w+@\w+\.\w+/i)) {
      $('#errors').append('<li>Email is Invalid</li>');
      valid_input = false;
    }
  };

  var is_valid_password = function(password) {
    if (password.length < 8) {
      $('#errors').append('<li>Password must be at least 8 characters long</li>');
      valid_input = false;
    }
    if (!password.match(/[A-Z]/)) {
      $('#errors').append('<li>Password must contain at least one uppercase character</li>');
      valid_input = false;
    }
    if (!password.match(/\d/)) {
      $('#errors').append('<li>Password must contain at least one numeric character (0-9)</li>');
      valid_input = false;
    }
  }

  var clear_error_messages = function() {
    $('#errors').empty();
  }

  var sign_up_request = function() {
    $.ajax({
      type: "POST",
      url: '#',
      data: $('#sign_up').serialize()
    }).done (function() {
      alert("successfully posted!")
    }).fail (function() {
      alert("post failed")
    });
  }

  $('#sign_up').on('submit', function(e) {
    e.preventDefault();
    clear_error_messages();
    is_valid_email($('input[name=email]').val());
    is_valid_password($('input[name=password]').val());
    if (valid_input) {
      sign_up_request();
    }
    valid_input = true
  });
});