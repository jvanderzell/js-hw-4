$(document).ready(function() {
	console.log("ready!");

//Exercise #1
var classmates = ["Ralph", "Zack", "Tony"];
var grade = [90, 80, 100];

for (var i = 0; i < classmates.length; i++) {
	console.log(classmates[i] + " got " + grade[i] + "% on the test");
};


//Exercise #2
 $("form").submit(function(event) {
 	var userInput = document.getElementById("input");
 	var age = userInput.value;
 	alert("You are " + (2015 - age) + " years old");
 	event.preventDefault();
 });


});
