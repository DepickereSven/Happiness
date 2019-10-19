const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    let result = {
      data: 'ok'
    };
    res.json(result);
});


router.post('/vote', function (req, res) {

});


router.get('/stats/day', function (req, res) {

});

router.get('/stats/week', function (req, res) {

});

router.get('/stats/month', function (req, res) {

});


module.exports = router;