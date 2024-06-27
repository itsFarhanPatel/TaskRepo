const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, DEVOPS, This is Updated code');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

