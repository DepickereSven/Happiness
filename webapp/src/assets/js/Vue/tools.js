/**
 Created by svend on 21/10/2019.
 **/

export default (function () {


    function selectRandomPic(arrayPic) {
        let min = 0;
        let max = arrayPic.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return {
        selectRandomPic
    }

})();
