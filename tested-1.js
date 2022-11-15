const multiplyPositive = (first, second) => {
    if (!first || !second) {
        return "Both values must be exist";
    }

    if (first < 0 || second < 0) {
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