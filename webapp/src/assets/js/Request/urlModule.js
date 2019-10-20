/**
 Created by svend on 20/10/2019.
 **/

export default (function () {

    const IP = "localhost";
    const PORT = "8001";
    const BASE_URL = "http://" + IP + ":" + PORT + "/api/v1/";

    const VOTE = "vote";
    const STATS = "stats/";

    const VOTE_URL = BASE_URL + VOTE;
    const STATS_URL = BASE_URL + STATS;

    const url = {
        vote: VOTE_URL,
        stats: {
            day: STATS_URL + 'day',
            week: STATS_URL + 'week',
            month: STATS_URL + 'month',
        }
    };

    return {
        url
    }

})();