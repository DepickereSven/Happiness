/**
 Created by svend on 20/10/2019.
 **/

import dayStats from "./Get/Stats/requestForDay"
import weekStats from "./Get/Stats/requestForWeek"
import monthStats from "./Get/Stats/requestForMonth"
import vote from "./Post/Vote/requestForVote"
import login from "./Post/Login/requestToLogin"

export default (function () {

    const request = {
        stats: {
            day: dayStats.getTheStats,
            week: weekStats.getTheStats,
            month: monthStats.getTheStats
        },
        vote: vote.makeAVote,
        login: login.loginUser
    };

    return {
        request
    }

})();