/**
 Created by svend on 20/10/2019.
 **/

const moment = require("moment");
import requestHandler from "../../Request/requestHandler"
import tools from "../tools"

export default (function () {

    const init = async function (_self) {
        _self.chartOptionsLine1 = {..._self.chartOptionsLine1, ..._self.otherOptions};
        _self.chartOptionsLine2 = {..._self.chartOptionsLine2, ..._self.otherOptions};
        _self.chartOptionsLine3 = {..._self.chartOptionsLine3, ..._self.otherOptions};
        await generateChartData(_self, 'day');
    };

    async function generateChartData(_self, graphView){
        let originalData = await getData(graphView);
        if (originalData.length === 0){
            _self.selectedEmptyPic = _self.emptyPic[tools.selectRandomPic(_self.emptyPic)];
            _self.error = true;
        } else {
            generateTheCorrectGraph (_self, originalData, graphView);
        }
    }

    // ****** HELP FUNCTION ****** //

    async function getData(graphView) {
        let result = await requestHandler.request.stats[graphView.toLowerCase()]();
        return result.data.data.map(function (el) {
            el.date = moment(el.date).valueOf();
            return el;
        })
    }

    function generateTheCorrectGraph (_self, originalData, graphView){
        switch (graphView.toLowerCase()) {
            case 'day':
                generateDayChart(_self, originalData);
                break;
            case 'week':
            case 'month':
                generateWeekOrMonthChart(_self, originalData);
                break;
        }
        _self.error = false;
    }

    function generateWeekOrMonthChart (_self, originalData){
        _self.happy[0].data = buildData(filter(tools.$Happy, originalData));
        _self.ok[0].data = buildData(filter(tools.$Ok, originalData));
        _self.sad[0].data = buildData(filter(tools.$Sad, originalData));
        _self.weekOrMonth = true;
        console.log(_self.weekOrMonth);
    }

    function generateDayChart(_self, originalData) {
        tools.$status.forEach(function (status) {
            let valuesFilterStatus = originalData.filter(function (el) {
                return el.happinessIndicator === status
            })[0];
            _self.dayData.push(valuesFilterStatus.number);
            _self.chartOptionsDay.labels.push(valuesFilterStatus.happinessIndicator.capitalize())
        });
        _self.weekOrMonth = false;
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
        init,
        generateChartData
    }

})();
