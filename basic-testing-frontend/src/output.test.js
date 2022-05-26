import { describe, expect, it } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("should return a string when value is passed off", () => {
    const input1 = 1;
    const input2 = "testing";
    const input3 = false;

    const resultFunc1 = generateResultText(input1);
    const resultFunc2 = generateResultText(input2);
    const resultFunc3 = generateResultText(input3);

    expect(resultFunc1).toBeTypeOf("string");
    expect(resultFunc2).toBeTypeOf("string");
    expect(resultFunc3).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is provided as result", () => {
    const calculationResult = 5;

    const resultText = generateResultText(calculationResult);

    expect(resultText).toContain(calculationResult.toString());
  });

  it("should return no string if no-calc is passed", () => {
    const calculationResult = "no-calc";

    const resultText = generateResultText(calculationResult);

    expect(resultText).toBe("");
  });

  it("should return string contains invalid if no-calc is passed", () => {
    const calculationResult = "invalid";

    const resultText = generateResultText(calculationResult);

    expect(resultText).toContain("Invalid");
  });
});
