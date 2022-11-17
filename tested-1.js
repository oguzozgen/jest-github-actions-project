const isNumber = (value) => {
    if (!value) {
        return false;
    }


    if (typeof (value) != "number") {
        return false;
    }

    if (typeof (value) === "number") {
        return true;
    }

    return true;
};

const isBoolean = (value) => {
    if (!value) {
        return false;
    }

    if (typeof (value) != "boolean") {
        return false;
    }

    return true;
};

const isString = (value) => {
    if (!value) {
        return false;
    }

    if (typeof (value) != "string") {
        return false;
    }

    return true;
};

const isObject = (value) => {
    if (!value) {
        return false;
    }

    if (typeof (value) != "object") {
        return false;
    }

    return true;
};

module.exports = {
    isNumber,
    isBoolean,
    isString
};