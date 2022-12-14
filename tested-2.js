const multiplyPositive = (first, second) => {
    if (!first || !second) {
        return "Both values must be exist";
    }

    if (!first >= 1 || !second >= 1) {
        return "Values must be positive";
    }

    if (typeof (first) !== "number" || typeof (second) !== "number") {
        return "Values types must be number";
    }

    return first * second;
};

module.exports = {
    multiplyPositive
};