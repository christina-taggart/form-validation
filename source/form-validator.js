// shorthand for $(document).ready();
$(function(){
	$("#signup").on('submit', function(e){
		e.preventDefault();
		var email= $(this).find("input[name=email]").val();
		var password= $(this).find("input[name=password]").val();
		validateEmail(email);
		validatePassword(password);
	});
});

function validateEmail(email) 
{
	var re = /\S+@\S+\.\S+/;
	if (!re.test(email)){
		$("#errors").append("<li>Error: Must be valid email!</li>");
	}
}

function validatePassword(password){
	var leng = /\w{8}/;
	if (!leng.test(password)){
		$("#errors").append("<li>Error: Must be at least 8 characters long!</li>");
	}

	var cap = /[A-Z]/;
	if (!cap.test(password)){
		$("#errors").append("<li>Error: Must contain at least 1 capital letter!</li>");
	}

	var num = /\d/;
	if (!num.test(password)){
		$("#errors").append("<li>Error: Must contain at least 1 capital letter!</li>")
	}
}

   // When the user clicks the "Sign Up" button
   //  They should be notified if any of the following conditions are NOT true
   //  - The email conforms to the standard pattern
   //  - The password has at least 8 characters
   //  - The password has at least one capital letter
   //  - The password has at least one numeric character

   //  If any of the above conditions are false
   //  - The form is not allowed to be submitted
   //  - Error messages are dislpayed


