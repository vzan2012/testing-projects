import { describe, expect, it } from "vitest";
import writeData from "./io";

describe.concurrent("IO Tests", () => {
  it("should write the execute method", () => {
    const testData = "This is test content";
    const testFilename = "test.txt";

    // writeData - Promise returns void
    expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
