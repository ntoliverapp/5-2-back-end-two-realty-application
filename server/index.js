const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const ctrl = require('./controller');

app.get('/api/houses', ctrl.getHouses);
app.post('/api/houses', ctrl.createHouses);
app.put('/api/houses/:id', ctrl.updateHouse);

app.listen(4545, () => 
console.log ("4545 running!"));