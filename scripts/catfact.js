var apiUrl = "https://catfact.ninja/fact";

fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {

	var concat = "Here's your fact: " + data.fact;

	document.getElementById('catFact').innerText = concat

	}).catch(err => {
	// we will deal with this in the SECOND PHASE of the project
	// error handling code will go here
	// we will log a console message/notify the user that the API is unavailable
});