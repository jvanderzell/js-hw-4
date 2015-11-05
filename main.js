$(document).ready(function() {
	console.log("ready!");

//Exercise #1
var classmates = ["Ralph", "Zack", "Tony"];
var grade = [90, 80, 100];

for (var i = 0; i < classmates.length; i++) {
	console.log(classmates[i] + " got " + grade[i] + "% on the test");
};

//Exercise #2

//create on submit event
$("#ageForm").submit(function(event) {
	event.preventDefault();

//capture birth year value from the input value
	var birthYear = $("#birthYear").val();
	var age = 2015 - birthYear;
	var ageNumber = parseInt(birthYear);

//if input is not a number, alert user to enter a number
	if((1885 < ageNumber) && (2016 > ageNumber)) {
		$("#calcAge").html("You are " + age + " years old");
	} else {
		$("#calcAge").html("Please enter a valid 4 digit year between 1885 and 2016");
	};

});

});
