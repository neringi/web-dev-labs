

function processSubmit(e) {
    e.preventDefault();
    console.log('neringa test');
    var fname = document.querySelector('#form-name').value; 
    var femail = document.querySelector('#form-email').value;
    var fmessage = document.querySelector('#form-message').value;

    // console.log(e);
    console.log(fname);
    console.log(femail); 
    console.log(fmessage);   
    
    
    /* data we want to send to the Node*/
    const message = {
        "name": document.querySelector('#form-name').value,
        "email": document.querySelector('#form-email').value,
        "message": document.querySelector('#form-message').value
    };

    console.log(message);

    function onTextReady(text){
        console.log(text);
        document.getElementById("post-response").innerHTML = text;
        document.getElementById("post-response").style.color = '#ff0000';
    }
    
    function onResponse(response){
        return response.text();
    }
    

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


fetch('http://localhost:3000/form', fetchOptions)
.then(onResponse)
.then(onTextReady);

};

document.querySelector("#form").addEventListener("submit", processSubmit);


