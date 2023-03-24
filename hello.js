/* second callback function to handle the text returned */
function onTextReady(text){
	console.log(text);
    const results = document.querySelector("#post-response");
	results.textContent = text;	
    results.className = "postRed";
}

/* first callback function */
function onResponse(response){	
	return response.text();
}

/* the data we want to send to Node */
const message = {
	name: 'Jeannette',
	email: 'j.chin@uea.ac.uk'
};

/* convert JS object to JSON */
const serializedMessage = JSON.stringify(message);

/* the request data */
const fetchOptions ={
	method: 'POST',
	headers:{
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: serializedMessage
}

fetch('http://localhost:3000/hello',fetchOptions )
.then(onResponse)
.then(onTextReady);

