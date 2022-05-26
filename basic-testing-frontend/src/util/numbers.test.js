import { expect, it, describe } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber() ", () => {
  it("should transform given numeric string to number", () => {
    // Arrange
    const input = "1";

    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBeTypeOf("number");
  });

  it("should transform given numeric string to number", () => {
    // Arrange
    const input = "1";

    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBe(+input);
  });

  it("should return NaN when test string is given as input", () => {
    // Arrange
    const input = "hello";
    const input1 = {};

    // Act
    const result = transformToNumber(input);
    const result1 = transformToNumber(input1);
    // Assert
    expect(result).toBeNaN();
    expect(result1).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of numbers if array of string number values is provided", () => {
    const input = ["1", "2"];
    const result = cleanNumbers(input);
    expect(result[0]).toBeTypeOf("number");
    expect(result).toEqual([1, 2]);
  });
  it("should return an error with atleast one empty string is provided", () => {
    const input = ["", "2"];
    const resultFunc = () => cleanNumbers(input);
    expect(resultFunc).toThrow();
  });
});
