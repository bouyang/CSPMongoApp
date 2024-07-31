// app2.js
const express = require('express');
const app = express();
const port = 4001;

app.get('/', (req, res) => {
    res.send('Hello from Express App 2');
});

app.listen(port, () => {
    console.log(`Express App 2 is running on http://localhost:${port}`);
});
