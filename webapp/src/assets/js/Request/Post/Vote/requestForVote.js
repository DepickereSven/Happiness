/**
 Created by svend on 20/10/2019.
 **/

const postRequest = require('../../RequestFormat/PostFormatForText');
const urlModule = require('../../urlModule');
const errorMessages = require('../../errorMessages');


export default (function () {

    const makeAVote = async function (formData, _self) {
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