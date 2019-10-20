/**
 Created by svend on 20/10/2019.
 **/

const moment = require("moment");
import requestHandler from "../../Request/requestHandler"

export default (function () {

    const init = async function (_self) {
        _self.chartOptionsLine1 = {..._self.chartOptionsLine1, ..._self.otherOptions};
        _self.chartOptionsLine2 = {..._self.chartOptionsLine2, ..._self.otherOptions};
        _self.chartOptionsLine3 = {..._self.chartOptionsLine3, ..._self.otherOptions};

        let originalData = await getData();
        _self.happy[0].data = buildData(filter('happy', originalData));
        _self.ok[0].data = buildData(filter('ok', originalData));
        _self.sad[0].data = buildData(filter('sad', originalData));
    };

    // ****** HELP FUNCTION ****** //

    async function getData() {
        let result = await requestHandler.request.stats.week();
        return result.data.data.map(function (el) {
            el.date = moment(el.date).valueOf();
            return el;
        })
    }

    function buildData(filterData) {
        return filterData.map(function (el) {
            return [el.date, el.number]
        })
    }

    function filter(filterValue, originalData) {
        return originalData.filter(el => el.happinessIndicator === filterValue);
    }

    return {
        init
    }

})();
