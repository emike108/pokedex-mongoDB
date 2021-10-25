const express = require('express');
const path = require('path');
let app = express();
const port = 4200;
const axios = require('axios');


const db = require('../db/index.js');
// const Pokemon = require('../db/index.js');



app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, '../client/dist')));


// app.get('/', function (req, res) {
//   res.send('hello world')
// })

app.get('/pokemon', (req, res) => {
  const query = db.Pokemon.find({})
  // res.status(200).send(query.data)
    .exec((err, results) => {
      if (err) {
        throw err
      } else {

        res.status(200).send(results)
      }
    })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

