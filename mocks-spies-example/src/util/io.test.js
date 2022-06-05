import { beforeAll, describe, expect, it, vi } from "vitest";
import writeData from "./io";

import { promises as fs } from "fs";

// Mock 'fs'
vi.mock("fs");

// Mock 'path'
vi.mock("path", () => ({
  default: {
    join: (...args) => args[args.length - 1],
  },
}));

describe.concurrent("IO Tests", () => {
  it("should write the execute method", () => {
    const testData = "This is test content";
    const testFilename = "test.txt";

    writeData(testData, testFilename);

    // writeData - Promise returns void
    // expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });
  it("should returns a promise that resolves to no value if called uncorrectly", () => {
    const testData = "This is test content";
    const testFilename = "test.txt";

    writeData(testData, testFilename);

    // writeData - Promise returns void
    expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });
});
