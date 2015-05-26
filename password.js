var letterCount = 0;
var pass;

$(document).keydown(function(e) {
	pass = $(".password").val().length
	console.log(pass);
	passStatus = $(".pass-status")
	// console.log(pass);
	 //console.log(e.which)
	
	letterCount = pass+1
  //console.log(letterCount);

  //passStatus.text(passStatus.text() + " " + letterCount)
  if (letterCount <= 5) {
  	passStatus.text( "Password Not Long Enough! " + letterCount +" characters is too short!!").css("color", "black")
  } else {
  	passStatus.text("BEAUTIFUL").css("color", "orange")
  }

});

 $( "button#submit" ).click(function(evt) {
 	evt.preventDefault();
 	console.log(pass);
 	if (pass >= 5){
  $( "#form-elements" ).fadeOut("slow")
  
   $("#congrats").animate({
   	opacity: 1
   },2000)
}});


