/**
 Created by svend on 21/10/2019.
 **/

const jwt = require('jsonwebtoken');

const $secret = "#nj9WPkOp-vm+n..#45RZnB";

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, $secret);
        next();
    } catch (e) {
        res.status(401).json(
            {
                status: false,
                message: 'Auth failed'
            }
        )
    }


};
