const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})



app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
})