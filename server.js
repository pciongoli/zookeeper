const express = require('express');
const app = express;

// listens for connections on the specified host and port
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});