/**
 Created by svend on 20/10/2019.
 **/

import getRequest from "../../RequestFormat/GetFormat"
import urlModule from "../../urlModule"
import errorMessages from "../../errorMessages"

export default (function () {

    const getTheStats = async function (_self) {
        const response = (await getRequest.fetchRequestForGettingData({
            Url: urlModule.url.stats.day
        }));
        if (response.error) {
            response.msg = errorMessages.messages.stats.day;
        }
        return response;
    };

    return {
        getTheStats
    }

})();