/**
 Created by svend on 21/10/2019.
 **/

const knex = require('knex')(require('../config/config.env.sql'));

exports.login = function (req, res) {
    let data = req.body;
    knex('users')
        .select('')
        .where({
            userName: data.userName,
            password: data.password
        })
        .count('userName as hit')
        .then(function (resp) {
            if (resp[0].hit === 1) {
                res.json(
                    {
                        status: true,
                        message: 'ok'
                    }
                )
            } else {
                res.json(
                    {
                        status: false,
                        msg: error.code
                    }
                )
            }
        })
        .catch(function (error) {
            res.json(
                {
                    status: false,
                    msg: error.code
                }
            )
        })
};