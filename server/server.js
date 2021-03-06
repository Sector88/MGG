const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const marvelSchema = require('./model/marvelModel')
const routes = require('./routes/api')
const PORT = 3000;




// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// })


app.use(express.json()); // check this
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));


app.use(morgan('tiny'));
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`WE BE LISTENING: ${PORT}`);
});



