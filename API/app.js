const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./router');

app.use('/api/v1/', router);

app.use(function (req, res, next) {
    res.status(404).json({
        status: 404,
        msg: "Sorry can't find that!"
    })
});

app.listen(8001, function () {
    console.log('app listening at port %s', 8001);
});


module.exports = app;