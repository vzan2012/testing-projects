import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe.concurrent("generateReportData()", () => {
  it("should execute if logFn is provided", () => {
    // Spy Replacement
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
