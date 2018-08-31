const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;

let scrapper = require('./app/scrapper');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
  console.log('listening on 3000');
  scrapper.getMangas();
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html')
});