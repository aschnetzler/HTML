function professional() {
	var typeContact= document.forms['contact']['proOrPer'].value;
	var code = "";

	if (typeContact == 'pro') {
		code = code + "<input type='radio' name='Job' value='internship' onclick='internshipStuff()' id='internship'> Internship";
		code = code + "<input type='radio' name='Job' value='fullTime' onclick='fullTime()' id='fulltime'> Professional Full Time";
		code= code + "<div id='internshipButton'></div>"
	}
	document.getElementById('contactType').innerHTML = code;
}
function internshipStuff() {
	var code = "";
	code= code + "<p> Enter the city for the internship:</p>";
	code= code+"<input type='text' name= 'internCity'>";
	code= code + "<p> Enter a starting wage:</p>";
	code= code+"<input type='text' name= 'wage'>";
	code= code + "<p> Select a start date:</p>";
	code= code+"<input type='date' name= 'startDateIntern'>";
	document.getElementById('internshipButton').innerHTML = code;
}
function fullTime() {
	var code = "";
	code= code + "<p> Enter the city for Professional Full Time job:</p>";
	code= code+"<input type='text' name= 'jobCity'>";
	code= code + "<p> Enter a starting salary:</p>";
	code= code+"<input type='text' name= 'salary'>";
	code= code + "<p> Select a start date:</p>";
	code= code+"<input type='date' name= 'startDateJob'>";
	document.getElementById('contactType').innerHTML = code;
	}
function rentalCar() {
	var typeRental = document.forms['contact']['rental'].value;
	var code = "";

	if (typeRental == 'yes') {
		code = code + "<p>Enter the city for pick up location:</p>";
		code= code+"<input type='text' name= 'pickUplocation'>";
		code = code + "<p>Enter the date and time for pick up:</p>";
		code= code+"<input type='datetime-local' name= 'pickUpTime'>";
		code = code + "<p>Enter the city for drop off location:</p>";
		code= code+"<input type='text' name= 'dropOffLocation'>";
		code = code + "<p>Enter the date and time for drop off:</p>";
		code= code+"<input type='datetime-local' name= 'dropOffTime'>";
		}
	document.getElementById('rentalCar').innerHTML = code;
}
function resetform() {
	document.forms['contact']['reset'].value = "";
}