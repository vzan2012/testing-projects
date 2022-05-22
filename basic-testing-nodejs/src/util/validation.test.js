import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw error when empty string is given", () => {
    const input = "";
    const resultFunc = () => validateStringNotEmpty(input);
    expect(resultFunc).toThrow();
  });

  it("should throw error with error msh when empty string is given", () => {
    const input = "";
    const resultFunc = () => validateStringNotEmpty(input);
    expect(resultFunc).toThrow(/Invalid input - must not be empty/);
  });

  it("should throw error if long string is given with blank", () => {
    const input = "";
    const resultFunc = () => validateStringNotEmpty(input);
    expect(resultFunc).toThrow();
  });

  it("should throw error if any other value a string is provided", () => {
    const input = 1;
    const input1 = true;
    const input2 = {};
    const resultFunc = () => validateStringNotEmpty(input);
    const resultFunc1 = () => validateStringNotEmpty(input1);
    const resultFunc2 = () => validateStringNotEmpty(input2);
    expect(resultFunc).toThrow();
    expect(resultFunc1).toThrow();
    expect(resultFunc2).toThrow();
  });

  it("should not throw error if a string is provided", () => {
    const input = "valid";
    const resultFunc = () => validateStringNotEmpty(input);
    expect(resultFunc).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw error if NaN is provided", () => {
    const input = NaN;
    const resultFunc = () => validateNumber(input);
    expect(resultFunc).toThrow();
  });

  it("should throw error with error message if NaN is provided", () => {
    const input = NaN;
    const resultFunc = () => validateNumber(input);
    expect(resultFunc).toThrow(/Invalid number/);
  });

  it("should throw error when string is given as input", () => {
    const input = "100";
    const resultFunc = () => validateNumber(input);
    expect(resultFunc).toThrow();
  });

  it("should validate when number is given as input", () => {
    const input = 100;
    const resultFunc = () => validateNumber(input);
    expect(resultFunc).not.toThrow();
  });
});
