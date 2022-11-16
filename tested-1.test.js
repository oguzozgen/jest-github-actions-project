let tested1 = require("./tested-1");

describe("logic module tests", function () {

    test("if value number, it should return true", function () {
        expect(tested1.isNumber(1)).toBe(true);
    });

    test("if value null, it should return false", function () {
        expect(tested1.isNumber(null)).toBe(false);
    });
});
