const env = process.env.NODE_ENV || 'development';

// imoprt database configurations
const config = require('./config.js')[env];


const express = require('express');
const app = express();
const port = 3000;

// import JSON validator
const validate = require('express-jsonschema').validate;

// sanitize the data //
const sanitizer = require('express-html-sanitizer');
const sanitizeReqBody = sanitizer();

/// load PG library
const pg = require('pg');

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

/* GET route with users path*/
app.get('/users', async (req,res) => {
    try{
        let results;
        const pool = new pg.Pool(config);
        const client = await pool.connect();
        const q = 'select * from users;'
        //client.query('set search_path to public;')
        await client.query(q, (err,results) => {
            if (err) {
                console.log(err.stack)
                errors = err.stack.split(" at");
                res.json({ message: 'Sorry something went wrong! The data has not been processed ' + errors[0]});
            } else {
                client.release();
                console.log(results); //
                data = results.rows;
                count = results.rows.length;
                res.json({ results: data, rows: count});
            }
        });
        
    } catch(e){
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`My first app listening on port ${port} !`)
});

