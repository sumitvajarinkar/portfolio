// Sub title
var subtitle = document.getElementById("subtitle");
var typewriter = new Typewriter(subtitle, {
	loop: true,
	delay: 100,
});

typewriter
	.typeString("<strong>Programmer</strong>")
	.pauseFor(500)
	.deleteAll()
	.typeString("<strong>Web Developer</strong>")
	.pauseFor(500)
	.deleteAll()
	.typeString("<strong>Traveller</strong>")
	.pauseFor(500)
	.deleteAll()
	.pauseFor(500)
	.start();

// About
var about = document.getElementById('about');
var typewriter = new Typewriter(about, {

	strings:['About'],
	
	autoStart: true,
	  loop: true,
		delay: 80,
		
	  });	

//skills
var skills = document.getElementById('skills');
var typewriter = new Typewriter(skills, {

	strings:['Skills'],
	
	autoStart: true,
	  loop: true,
		delay: 80,
		
	  });	

//
var projects = document.getElementById('projects');
var typewriter = new Typewriter(projects, {

	strings:['Projects'],
	
	autoStart: true,
	  loop: true,
		delay: 80,
		
	  });	
var contact = document.getElementById('contact');
var typewriter = new Typewriter(contact, {

	strings:['Contact me'],
	
	autoStart: true,
	  loop: true,
		delay: 80,
		
	  });	

document.querySelector("#contactForm").addEventListener("submit", function (e) {
		e.preventDefault();
		sweetAlert("Thank you !\nYour message is sent.")
		var name = document
			.querySelector("#contactForm")
			.getElementsByTagName("input")[0].value;
		var email = document
			.querySelector("#contactForm")
			.getElementsByTagName("input")[1].value;
			var message = document
			.querySelector("#contactForm")
			.getElementsByTagName("textarea")[0].value;
	
			var templateParams={
				fname:document.getElementById("fname").value,
				mail:document.getElementById("mail").value,
			msg:document.getElementById("msg").value,
		  };
	
		emailjs.send("service_u73dwx4", "template_9m7z5e8", templateParams).then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
				
			}
		);
	});
