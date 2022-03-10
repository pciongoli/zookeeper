const express = require('express');
const { animals } = require('./data/animals');


const app = express();


// add route
app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query);
    res.json(animals);
});

// listens for connections on the specified host and port
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});