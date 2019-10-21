/**
 Created by svend on 21/10/2019.
 **/

import requestHandler from "../../Request/requestHandler"

export default (function () {

    const login = async function (_self) {
        _self.isLoading = true;
        await doTheLoginRequest(_self);
        _self.isLoading = false;
    };

    // ****** HELP FUNCTION ****** //

    async function doTheLoginRequest(_self) {
        let result = await requestHandler.request.login({
            userName: _self.userName,
            password: _self.password
        });
        if (result.error){
            showAlertMessage(_self, result.msg);
        } else {
            saveToken(_self, result.data.token);
            _self.$router.push({name: "stats"});
        }
    }

    function showAlertMessage(_self, msg) {
        _self.alert.status = true;
        _self.alert.message = msg
    }

    function saveToken(_self, token) {
        _self.$store.commit("updateLogin", {
            user: true,
            token: token
        })
    }


    return {
        login
    }

})();
