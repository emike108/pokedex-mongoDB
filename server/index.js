const express = require('express');
const path = require('path');
let app = express();
const port = 4200;

const db = require('../db/index.js');



app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, '../client/dist')));


// app.get('/', function (req, res) {
//   res.send('hello world')
// })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

