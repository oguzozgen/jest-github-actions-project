
let logicModule = require("./logic");

describe("logic module tests", function () {

    test("if first value not exist, Response will be string error message", function () {
        expect(logicModule.sumPositive(null, 2)).toBe("Both values must be exist");
    });

    test("if second value not exist, Response will be string error message", function () {
        expect(logicModule.sumPositive(3, null)).toBe("Both values must be exist");
    });

    test("When first value type string, Response will be string error message", function () {
        expect(logicModule.sumPositive("asd", "asd")).toBe("Values types must be number");
    });

    test("When both values positive number, it will return summed numbers", function () {
        expect(logicModule.sumPositive(2, 3)).toEqual(5);
    });
});