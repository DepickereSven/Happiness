/**
 Created by svend on 21/10/2019.
 **/

const knex = require('knex')(require('../config/config.env.sql'));
const jwt = require('jsonwebtoken');

const $secret = "#nj9WPkOp-vm+n..#45RZnB";

exports.login = function (req, res) {
    let data = req.body;
    knex('users')
        .select('')
        .where({
            userName: data.userName,
            password: data.password
        })
        .then(function (resp) {
            if (resp.length === 1) {
                const token = jwt.sign({
                        userName: resp[0].userName,
                        userId: resp[0].id
                    },
                    $secret,
                    {
                        expiresIn: "1h"
                    });
                res.json(
                    {
                        status: true,
                        message: 'ok',
                        token: token
                    }
                )
            } else {
                res.status(401).json(
                    {
                        status: false,
                        message: 'Auth failed'
                    }
                )
            }
        })
        .catch(function (error) {
            res.status(401).json(
                {
                    status: false,
                    message: 'Auth failed'
                }
            )
        })
};