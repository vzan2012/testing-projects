import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

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
