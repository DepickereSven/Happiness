/**
 Created by svend on 20/10/2019.
 **/

const moment = require("moment");
import requestHandler from "../../Request/requestHandler"

export default (function () {


    const init = function (_self) {
        _self.date = moment().format('dddd MMM YYYY');
        if (_self.$store.state.voted === null || _self.date === _self.$store.state.voted) {
            console.log("heey");
            _self.voted = true;
        }
        _self.selectedHappyPic = _self.happinessPic[selectRandomPic(_self.happinessPic)];
        _self.selectedTomorrowPic = _self.tomorrowPic[selectRandomPic(_self.tomorrowPic)];
    };


    const voteRequest = async function (_self, vote) {
        let result = await requestHandler.request.vote({
            date: moment().format('YYYY-MM-DD'),
            happinessIndicator: vote.toLowerCase()
        });
        if (result){
            _self.voted = true;
            _self.$store.commit('updateVoted', _self.date)
        } else {
            // TODO error
        }
    };


    // ****** HELP FUNCTION ****** //

    function selectRandomPic(arrayPic) {
        let min = 0;
        let max = arrayPic.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return {
        init,
        voteRequest
    }

})();
