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
        .orderBy('date')
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

exports.day = function (req, res) {
    const today = moment().format('YYYY-MM-DD');
    knex('votes')
        .where('date', today)
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


exports.month = function (req, res) {
    const currentMonth = moment().month();
    const currentYear = moment().year();
    const firstDayOfTheMonth = moment([currentYear, 0, 1 ]).month(currentMonth).format("YYYY-MM-DD");
    const lastDayOfTheMonth = moment([currentYear, 0, 31 ]).month(currentMonth).format('YYYY-MM-DD');

    knex('votes')
        .whereBetween('date', [firstDayOfTheMonth, lastDayOfTheMonth])
        .orderBy('date')
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