export function zcTrim(o) {
    if (o instanceof String || typeof o === 'string') {
        o = o.trim();
    } else if (o instanceof Object || typeof o === 'object') {
        for (var i in o) {
            if (o[i] instanceof String || typeof o === 'string') {
                o[i] = o[i].trim();
            }
            if (o[i] instanceof Array) {
                for (var j = 0; j < o[i].length; j++) {
                    o[i][j] = zcTrim(o[i][j]);
                }
            }
        }
    }
    return o;
}

export function setItemFocus(elementId) {
    var ele = document.getElementById(elementId);
    var str = ele.type.toLowerCase();
    switch (str) {
        case 'text':
            ele.focus();
            ele.select();
            break;
        case 'password':
            ele.focus();
            ele.select();
            break;

        case 'select-one':
            ele.focus();
            break;

        case 'radio':
            ele.focus();
            break;

        case 'select-multiple':
        case 'radio':
        case 'file':
        case 'textarea':
            ele.focus();
            ele.select();
            break;

        case 'button':
            ele.focus();
            break;

        case 'checkbox':
            ele.focus();
            break;
        case 'submit':
            ele.focus();
            break;
        default:
            break;
    }
}


