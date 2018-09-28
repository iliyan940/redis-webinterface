const path = require('path');
const express = require('express');
const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride ((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

router.use('/stack', require('./Stack'));
router.use('/store', require('./Store'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

module.exports = router;
