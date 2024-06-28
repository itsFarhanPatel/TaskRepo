const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, My name is Farhan.  This is Updated code second time by Farhan');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

