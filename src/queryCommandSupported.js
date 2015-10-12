var bowser = require('bowser');

var _queryCommandSupported = document.queryCommandSupported;

document.queryCommandSupported = function(cmd) {
    if (cmd === 'copy' || cmd === 'cut') {
        if (bowser.chrome && bowser.version >= 42) {
            return true;
        }

        if (bowser.opera && bowser.version >= 29) {
            return true;
        }

        if (bowser.firefox && bowser.version >= 41) {
            return true;
        }
        
        return false;
    }

    return _queryCommandSupported.apply(this, arguments);
};
