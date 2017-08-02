//bio
	var bio = {
		"name": "Shaik Abbas",
		"role": "Student",
		"contacts": { //list of contacts
			"mobile": "8686642987",
			"email": "shaikabbas051@gmail.com",
			"twitter": "@shaikabbas000",
			"github": "shaikabbas051",
			"location":"Hyderabad"
			},
		"welcomeMessage": "I'am Glad You're Here, You're at the right place.",
		"bioPic": "images/abbas.jpg",
		"skills": ["HTML","CSS","C language","Bootstrap","JavaScript","jQuery"]
	};
//display function
		bio.display = function() {
			$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
			$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
			$("#header").prepend(HTMLheaderName.replace("%data%", bio.name),HTMLheaderRole.replace("%data%", bio.role));
			$("#header").append(HTMLskillsStart);
			for (var i=0; i<bio.skills.length; i++){ //for loop to display skills
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
			}
			$("#topContacts:last, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		    $("#topContacts:last, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		    $("#topContacts:last, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		    $("#topContacts:last, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		    $("#topContacts:last, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		
			};
		bio.display();


//work
	var work = {
		"jobs":[
		{
			"employer":  	"Udacity",
			"title": 		"Developer",
			"dates": 		"Jun 2017 - future",
			"location": 	"Mumbai, India",
			"description":	"Creates a Adorable Websites. Helps the business to promote to the new level by providing the stunning experience."
		},
		{
			"employer": 	"DRDL",
			"title" : 		"Trainee",
			"dates" : 		"Nov,2013 - May,2014",
			"location":  	"Hyderabad, India",
			"description": 	"Study the characteristics of a material used in defense by performing the various tests. Results will be helpful for future experiments and developments."
		}
	]
	};

	work.display = function() {
		$("#workExperience").append(HTMLworkStart);
		for (var job=0; job<work.jobs.length; job++){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
	};
	work.display();

//projects
	var projects = {
		"project": [
			{
			"title": 	"Powerfactor Corection",
			"dates":	"June 2016 - May 2017",
			"description": 	"To design a circuit which can runs at a unity powerfactor by reducing the ripple content(introduced because of the switching elements). This type of circuits can save a lot of power and are more reliable.",
			"images": ["images/pf.jpg","images/pf1.jfif"]
			},
			{
			"title": 	"Prepaid Energy Meter",
			"dates":	"June 2013 - May 2014",
			"description": 	"A smart meter which can detect the faults and also charged automatically based on usage",
			"images": ["images/em2.jpg","images/em.jpeg"]
			}]
		};

	projects.display = function(){
			$("#projects").append(HTMLprojectStart);
			for (var item=0; item<projects.project.length; item++) {
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[item].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[item].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[item].description));
			for (var image=0; image<projects.project[item].images.length; image++){
				$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.project[item].images[image]));
			}
	}
	};
	projects.display();

//education
	var education = {
		"schools":[
			{
			"name": 	"J N Govt Polytechnic",
			"degree": 	"Diploma",
			"dates": 	2014,
			"location": "Mumbai, India",
			"major": 	["EEE"]
			},
			{
			"name": 	"M J College of Engineering and Tech",
			"degree": 	"Bachelor",
			"dates": 	2017,
			"location": "Hyderabad, India",
			"major": 	["EEE"]
			}],
		"onlineClasses":[{
			"title": 	"Front-End Web Devevelor",
			"school": 	"Udacity",
			"dates": 	"July, 2017",
			"url": 		"https://in.udacity.com/"
		}]
	};
	

	education.display = function(){
					$("#education").append(HTMLschoolStart);
		for (var school=0; school<education.schools.length; school++){
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));
			}
			$("#education").append(HTMLonlineClasses);
			for (var course=0; course<education.onlineClasses.length; course++){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineClasses[course].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineClasses[course].url));
			}
		};
	education.display();

//know the click locations
	$(document).click(function(point) {
	  var x = point.pageX;
	  var y = point.pageY;

	  logClicks(x,y);
	});


//internationalize the name
	function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	name = name.join(" ");
		return name;
	}
	$("#header").append(internationalizeButton);

//google map shows the location of work
	$("#mapDiv").append(googleMap);
