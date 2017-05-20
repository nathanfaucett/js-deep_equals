var has = require("@nathanfaucett/has"),
    isArrayLike = require("@nathanfaucett/is_array_like"),
    isObject = require("@nathanfaucett/is_object");


module.exports = deepEquals;


function deepEquals(a, b) {
    if (a === b) {
        return true;
    } else if (isArrayLike(a) && isArrayLike(b)) {
        return deepEqualsArray(a, b);
    } else if (isObject(a) && isObject(b)) {
        return deepEqualsObject(a, b);
    } else {
        return false;
    }
}

function deepEqualsArray(a, b) {
    var aLength = a.length,
        i, il;

    if (aLength !== b.length) {
        return false;
    } else {
        i = -1;
        il = aLength - 1;

        while (i++ < il) {
            if (!deepEquals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
}

function deepEqualsObject(a, b) {
    var localHas = has,
        key;

    for (key in a) {
        if (!deepEquals(a[key], b[key])) {
            return false;
        }
    }

    for (key in b) {
        if (!localHas(a, key)) {
            return false;
        }
    }

    return true;
}