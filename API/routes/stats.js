/**
 Created by svend on 19/10/2019.
 **/

const knex = require('knex')(require('../config/config.env.sql'));
const moment = require('moment');

exports.week = function (req, res) {
    const firstDayOfTheWeek = moment().locale('nl').weekday(0).format('YYYY-MM-DD');
    const lastDayOfTheWeek = moment().locale('nl').weekday(7).format('YYYY-MM-DD');
    knex('votes')
        .whereBetween('date', [firstDayOfTheWeek, lastDayOfTheWeek])
        .then(function (resp) {
            res.json({
                status: true,
                message: 'ok',
                data: resp
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