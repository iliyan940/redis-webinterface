const path = require('path');
const express = require('express');

const router = express.Router();
const Store = require('../models/Store');


const store = new Store();

router.get('/form/get', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/store', 'get.html'));
});


router.get('/form/set', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/store', 'set.html'));
});


router.get('/form/delete', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/store', 'delete.html'));
});


router.get('/item', (req, res) => {
  const { key } = req.query;
  (async function () {
    const response = await store.get(key);
    res.send(response);
  })();
});

router.post('/item', (req, res) => {
  // const key = req.body.key;
  // const value = req.body.value;
  // const time = req.body.time;
  const { key, value, time } = req.body;

  store.set(key, value, time);
  res.redirect('back');
});

router.delete('/item', (req, res) => {
  const { key } = req.body;
  console.log(key);
  store.delete(key);
  res.send(`${key} is deleted`);
});


module.exports = router;
