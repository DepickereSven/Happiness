/**
 Created by svend on 20/10/2019.
 **/

export default (function () {

    let fetchRequestForGettingData = function (fetchData) {
        return fetch(fetchData.getSpecifiedElement ? fetchData.Url + fetchData.specifiedElement : fetchData.Url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + fetchData.token
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return {error: true, msg: '', data: response};
            }
        }).then(json => {
            return {error: false, msg: 'ok', data: json};
        }).catch(function (error) {
            console.log('Request failed ', error);
            return {error: true, msg: '', data: error};
        })
    };

    return {
        fetchRequestForGettingData
    }

})();