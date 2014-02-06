// shorthand for $(document).ready();
$(function(){
		// event binding = function bindEvent(element, type, handler){ ... }
		$('form').on('submit', function(event){ 
			validate ( event, $(this).serialize() ) 
			// console.log($(this).serialize())
		});

		function validate(event,form){
			var userInfo = new EmailPassword(form)
			userInfo.verify()
			if (userInfo.errors.length > 0){
				event.preventDefault()
				userInfo.displayErrors()
			}
		}

		var EmailPassword = function(form){
			this.email = form.match(/email=(.*)&/)[1]
			this.password = form.match(/&password=(.*)$/)[1]
			this.errors = []
		}

		EmailPassword.prototype = {
			checkEmail: function(){
				if (this.email.match(/\w+%40\w+.\w{2,}/) == null){
					this.errors.push("Must ve a valid email address")
				}
			},
			checkPwNum: function(){
				if(this.password.match(/[0-9]/)==null){
					this.errors.push("Password must have at least one numeric character(0-9)")
				}
			},
			checkPwCap: function(){
				if(this.password.match(/[A-Z]/)==null){
					this.errors.push("Password must have at least one capital letter")
				}
			},
			checkPwLength: function(){
				if(this.password.match(/.{8,}/)==null){
					this.errors.push("Password must be at least 8 characters long")
				}
			},
			verify: function(){
				this.checkEmail()
				this.checkPwNum()
				this.checkPwCap()
				this.checkPwLength()
			},
			displayErrors: function(){
				$('li').remove()
				this.errors.forEach(function(message, index, errors){
					$('#errors').append('<li>' + message + '</li>')
				})
				}
			}
		
}); 

