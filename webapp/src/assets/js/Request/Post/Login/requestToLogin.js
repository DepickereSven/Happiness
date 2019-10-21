/**
 Created by svend on 21/10/2019.
 **/

import postRequest from "../../RequestFormat/PostFormat"
import urlModule from "../../urlModule"
import errorMessages from "../../errorMessages"

export default (function () {

    const loginUser = async function (formData) {
        const response = await postRequest.fetchRequestForGettingData({
            Url: urlModule.url.login,
            getSpecifiedElement: false,
            method: "POST",
            body: formData
        });
        if (response.error) {
            response.msg = errorMessages.messages.login;
        }
        return response;
    };

    return {
        loginUser
    }

})();