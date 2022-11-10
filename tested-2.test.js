let tested2 = require("./tested-2");

describe("logic module tests", function () {

    test("if first value not exist, Response will be string error message", function () {
        expect(tested2.multiplyPositive(3, 2)).toBe(6);
    });

    test("if first value not exist, Response will be string error message", function () {
        expect(tested2.multiplyPositive(null, 2)).toBe("Both values must be exist");
    });
});