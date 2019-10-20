/**
 Created by svend on 19/10/2019.
 **/

const knex = require('knex')(require('../config/config.env.sql'));

exports.vote = function (req, res) {
    let data = req.body;
    knex('votes').insert(
        {
            date: data.date,
            happinessIndicator: data.happinessIndicator
        })
        .then(function (resp) {
            res.json({
                status: true,
                message: 'ok'
            })
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