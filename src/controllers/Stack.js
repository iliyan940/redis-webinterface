const path = require('path');
const express = require('express');
const router = express.Router()
const Stack = require('../models/Stack');

const stack = new Stack();

router.get('/form/item', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/stack', 'push.html'));
});

router.post('/item', (req, res) => {
  let text = req.body.text;
  stack.push(text);
  res.redirect('/stack/form/item');
});

router.get('/item', (req, res) => {
  (async function (){
  	response = await stack.pop();
  	res.send(response);
  })();
});

module.exports = router