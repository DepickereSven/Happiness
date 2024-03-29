/**
 Created by svend on 20/10/2019.
 **/

import postRequest from "../../RequestFormat/PostFormat"
import urlModule from "../../urlModule"
import errorMessages from "../../errorMessages"

export default (function () {

    const makeAVote = async function (formData) {
        const response = await postRequest.fetchRequestForGettingData({
            Url: urlModule.url.vote,
            getSpecifiedElement: false,
            method: "POST",
            body: formData
        });
        if (response.error) {
            response.msg = errorMessages.messages.vote;
        }
        return response;
    };

    return {
        makeAVote
    }

})();
