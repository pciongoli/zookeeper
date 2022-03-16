const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// make files readily available and not gate behind a server endpoint
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data 
app.use(express.json());

// app will use router set up in apiRoutes when client navigates to <ourhouse>/api
// if the endpoints is "/" then the router will serve back our HTML routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listens for connections on the specified host and port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});