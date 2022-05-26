import { expect, it, describe } from "vitest";
import { add } from "./math";

describe("add()", () => {
  it("should summarize all the values in the array", () => {
    // Arrange
    const inputNumbers = [0, 2, 4, 6];

    // Act
    const sumResult = add(inputNumbers);

    // Assert
    const expectedResult = inputNumbers.reduce((pVal, cVal) => pVal + cVal, 0);
    expect(sumResult).toBe(expectedResult);
  });

  it("should yield NaN if one invalid number is provided", () => {
    // Arrange
    const givenInput = ["invalid", 1];

    // Act
    const result = add(givenInput);

    // Assert
    expect(result).toBeNaN();
  });

  it("should yield sum if numeric string array values is provided", () => {
    // Arrange
    const inputStrings = ["0", "1", "2"];
    // Act
    const result = add(inputStrings);
    // Assert
    const expectedResult = inputStrings.reduce(
      (pVal, cVal) => +pVal + +cVal,
      0
    );
    expect(result).toBe(expectedResult);
  });

  it("should yield zero if an empty array is provided", () => {
    const inputArray = [];
    const result = add(inputArray);
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const result = () => add();
    expect(result).toThrowError();
  });

  it("should throw an error if multiple arguments passed into the function", () => {
    // Arrange
    const num1 = 1;
    const num2 = 2;

    // Act
    const resultFunc = () => add(num1, num2);

    // Assert
    expect(resultFunc).toThrow(/numbers is not iterable/);
  });
});
