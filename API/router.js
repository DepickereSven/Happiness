/**
 Created by svend on 19/10/2019.
 **/

const express = require('express');
const router = express.Router();
const vote = require('./routes/vote');

router.post('/test', function (req, res) {
    let result = {
        data: 'ok'
    };
    res.json(result);
});


router.post('/vote', vote.vote);


router.get('/stats/day', function (req, res) {

});

router.get('/stats/week', function (req, res) {

});

router.get('/stats/month', function (req, res) {

});


module.exports = router;