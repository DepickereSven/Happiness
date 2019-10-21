/**
 Created by svend on 20/10/2019.
 **/

const moment = require("moment");
import requestHandler from "../../Request/requestHandler"
import tools from "../tools"

export default (function () {


    const init = function (_self) {
        _self.date = moment().format('dddd MMM YYYY');
        if (_self.$store.state.voted === null || _self.date === _self.$store.state.voted) {
            console.log("heey");
            _self.voted = true;
        }
        _self.selectedHappyPic = _self.happinessPic[tools.selectRandomPic(_self.happinessPic)];
        _self.selectedTomorrowPic = _self.tomorrowPic[tools.selectRandomPic(_self.tomorrowPic)];
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

    return {
        init,
        voteRequest
    }

})();
