import { beforeEach, describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

describe.concurrent("validateNotEmpty()", () => {
  it("should throw error when empty string is passed", () => {
    const testText = "";

    const result = () => validateNotEmpty(testText);

    expect(result).toThrowError();
  });

  it("should throw error when empty spaces string is passed", () => {
    const testText = "   ";

    const result = () => validateNotEmpty(testText);

    expect(result).toThrowError();
  });

  it("should throw error message when empty string is passed", () => {
    const testText = "";
    const testErrorMessage = "Text is empty !!!";

    const result = () => validateNotEmpty(testText, testErrorMessage);

    expect(result).toThrowError(testErrorMessage);
  });
});
