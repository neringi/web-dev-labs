const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


// tell express where the static files are stored
app.use(express.static('public'));


app.get('/', (req, res) => {
    //res.send('Web programming is fun!!')

    //send static file
    res.sendFile('index.html', (err) => {
        if(err){
            console.log(err);
        }
    })
});

/* GET request*/
app.get('/hello', (req, res) => {
    res.send('GET: Hello!');
});

/*GET request with parameter*/
app.get('/hello/:name', (req,res) => {
    const routeParams = req.params;
    const name = routeParams.name
    res.send('GET: Hello,' + name);
});

/* POST request with parameter */
app.post('/hello', jsonParser, (req,res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    res.send('POST: Name: ' + name + ', email: ' + email);
});


/* POST request with parameter */
app.post('/form', jsonParser, (req,res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const message = body.message;
    res.send('POST: Name: ' + name + ', email: ' + email + ', message: ' + message);
});

app.listen(port, () => {
    console.log(`My first app listening on port ${port} !`)
});

