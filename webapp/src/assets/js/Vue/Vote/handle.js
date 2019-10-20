/**
 Created by svend on 20/10/2019.
 **/

const moment = require("moment");
import requestHandler from "../../Request/requestHandler"

export default (function () {


    const init = function (_self) {
        _self.date = moment().format('dddd MMM YYYY');
        _self.selectedPic = _self.happinessPic[selectRandomPic(_self)];
    };


    const voteRequest = async function (_self, vote) {
        let result = await requestHandler.request.vote({
            date: moment().format('YYYY-MM-DD'),
            happinessIndicator: vote.toLowerCase()
        });
        console.log(result);
    };


    // ****** HELP FUNCTION ****** //

    function selectRandomPic(_self) {
        let min = 0;
        let max = _self.happinessPic.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return {
        init,
        voteRequest
    }

})();
