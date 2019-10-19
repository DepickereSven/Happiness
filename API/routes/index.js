const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    let result = {
      data: 'ok'
    };
    res.json(result);
});


module.exports = router;