/**
 Created by svend on 19/10/2019.
 **/

const express = require('express');
const router = express.Router();
const vote = require('./routes/vote');
const stats = require('./routes/stats');
const loginLoginOut = require('./routes/loginLoginOut');
const checkAuth = require('./routes/checkAuth');

router.post('/test', function (req, res) {
    let result = {
        data: 'ok'
    };
    res.json(result);
});

router.post('/login', loginLoginOut.login);

router.post('/vote', vote.vote);

router.get('/stats/day', checkAuth, stats.day);

router.get('/stats/week', checkAuth, stats.week);

router.get('/stats/month', checkAuth, stats.month);


module.exports = router;