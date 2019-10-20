/**
 Created by svend on 20/10/2019.
 **/

export default (function () {

    let fetchRequestForGettingData = function (fetchData) {
        return fetch(fetchData.getSpecifiedElement ? fetchData.Url + fetchData.specifiedElement : fetchData.Url, {
            method: fetchData.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchData.body),
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return {error: true, msg: response.status, data: response};
            }
        }).then(json => {
            if (json.status){
                return {error: false, msg: 'ok', data: json};
            } else {
                return {error: true, msg: '', data: json};
            }
        }).catch(function (error) {
            console.log('Request failed ', error);
            return {error: true, msg: '', data: error};
        })
    };

    return {
        fetchRequestForGettingData
    }

})();