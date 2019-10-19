const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRouter = require('./routes/index');

app.use('/api/', indexRouter);

app.listen(8001, function () {
    console.log('app listening at port %s', 8001);
});


module.exports = app;