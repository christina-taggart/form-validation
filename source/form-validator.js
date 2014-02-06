$(function(){
  $("button").on("click", function(event){
    event.preventDefault();
      var userEmail = $("input:text").val()
      var password = $("input:password").val()
      var goodEmail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!(goodEmail).test(userEmail)) {
        $("#errors").prepend("<p>Email error! Must enter a valid email address.</p>");
      } 
      else if(!(/\S{8,30}/).test(password)) {
        $("#errors").prepend("<p>Password must have at least 8 characters.</p>");
      }
       else if(!(/\d+/).test(password)) {
        $("#errors").prepend("<p>Password must have at least one numeric character (0-9).</p>");
      }
      else if(!(/[A-Z]+/).test(password)) {
        $("#errors").prepend("<p>Password must have at least one capital letter.</p>");
      }

  })

});