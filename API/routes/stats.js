/**
 Created by svend on 19/10/2019.
 **/

const knex = require('knex')(require('../config/config.env.sql'));
const moment = require('moment');


exports.day = function (req, res) {
    const today = moment().format('YYYY-MM-DD');
    knex('votes')
        .select('date', 'happinessIndicator')
        .where('date', today)
        .count('happinessIndicator as number')
        .groupBy('date')
        .groupBy('happinessIndicator')
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

exports.week = function (req, res) {
    const firstDayOfTheWeek = moment().locale('nl').weekday(0).format('YYYY-MM-DD');
    const lastDayOfTheWeek = moment().locale('nl').weekday(7).format('YYYY-MM-DD');
    knex('votes')
        .select('date', 'happinessIndicator')
        .whereBetween('date', [firstDayOfTheWeek, lastDayOfTheWeek])
        .orderBy('date')
        .count('happinessIndicator as number')
        .groupBy('date')
        .groupBy('happinessIndicator')
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
    const firstDayOfTheMonth = moment([currentYear, 0, 1]).month(currentMonth).format("YYYY-MM-DD");
    const lastDayOfTheMonth = moment([currentYear, 0, 31]).month(currentMonth).format('YYYY-MM-DD');

    knex('votes')
        .select('date', 'happinessIndicator')
        .whereBetween('date', [firstDayOfTheMonth, lastDayOfTheMonth])
        .orderBy('date')
        .count('happinessIndicator as number')
        .groupBy('date')
        .groupBy('happinessIndicator')
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