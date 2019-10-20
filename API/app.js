/**
 Created by svend on 19/10/2019.
 **/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./router');

app.use('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

app.use('/api/v1/', router);

app.use(function (req, res, next) {
    res.status(404).json({
        status: 404,
        msg: "Sorry can't find that!"
    })
});

app.listen(PORT, function () {
    console.log('app listening at port %s', PORT);
});


module.exports = app;