// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create route
app.get('/comments', (req, res) => {
    res.send('GET request to the comments');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});