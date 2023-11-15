function onTextReady(text){
    console.log(text);
    document.getElementById("post-response").innerHTML = text;
    document.getElementById("post-response").style.color = '#ff0000';
}

function onResponse(response){
    return response.text();
}


/* data we want to send to the Node*/
const message = {
    name: 'Neringa',
    email: 'n.chomanskyte@uea.ac.uk'
};

/*convert to JSON*/
const serializedMessage= JSON.stringify(message);

/*the request data*/
const fetchOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: serializedMessage
}


fetch('http://localhost:3000/hello', fetchOptions)
.then(onResponse)
.then(onTextReady);