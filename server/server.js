const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = 3000;
var app = express();

app.use(express.static(publicPath));

server.listen(3000, () => {
    console.log(`Server is up on port: ${port}`);
});