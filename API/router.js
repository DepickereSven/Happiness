/**
 Created by svend on 19/10/2019.
 **/

const express = require('express');
const router = express.Router();
const vote = require('./routes/vote');
const stats = require('./routes/stats');

router.post('/test', function (req, res) {
    let result = {
        data: 'ok'
    };
    res.json(result);
});


router.post('/vote', vote.vote);


router.get('/stats/day', stats.day);

router.get('/stats/week', stats.week);

router.get('/stats/month', stats.month);


module.exports = router;