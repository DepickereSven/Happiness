/**
 Created by svend on 21/10/2019.
 **/

export default (function () {


    function selectRandomPic(arrayPic) {
        let min = 0;
        let max = arrayPic.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const $Happy = 'happy';
    const $Ok = 'ok';
    const $Sad = 'sad';

    const $status = [$Happy, $Ok, $Sad];

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    return {
        selectRandomPic,
        $Happy, $Ok, $Sad,
        $status
    }

})();
