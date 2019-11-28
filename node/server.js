const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', (req, res) => {
   res.render('index',{
       title: 'VEICOLI',
       lego: lego.veicoli
   })

app.get('/instruzioni', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('istruzioni', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});
 

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port,  () => {console.log('Example app listening on port 3000!');});