const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const lego = require('./lego.json');

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.get('/', (req, res) => {
   res.render('index',{
       title: 'VEICOLI',
       lego: lego.veicoli
   })
});

app.get('/istruzioni', (req, res) => {
  const v = lego.veicoli.find(t => t.Number === req.query.Number);
  res.render('istruzioni', {
    title: `About ${v.Number} ${v.Name}`,
    v,
  });
});
 

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {
    console.log('Example app listening on port 3000!');
});
    