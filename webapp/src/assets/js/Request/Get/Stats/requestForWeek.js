/**
 Created by svend on 20/10/2019.
 **/

const getRequest = require('../../RequestFormat/GetFormat');
const urlModule = require('../../urlModule');
const errorMessages = require('../../errorMessages');

export default (function () {

    const getTheStats = async function (_self) {
        const response = (await getRequest.fetchRequestForGettingData({
            Url: urlModule.url.stats.week
        }));
        if (response.error) {
            response.msg = errorMessages.messages.stats.week;
        }
        return response;
    };

    return {
        getTheStats
    }

})();