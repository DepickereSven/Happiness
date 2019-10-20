/**
 Created by svend on 20/10/2019.
 **/

import getRequest from "../../RequestFormat/GetFormat"
import urlModule from "../../urlModule"
import errorMessages from "../../errorMessages"

export default (function () {

    const getTheStats = async function () {
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