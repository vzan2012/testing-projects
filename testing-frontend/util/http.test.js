import { describe, it, expect, vi } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn(
  (url, options) =>
    new Promise((resolve, reject) => {
      const testResponse = {
        ok: true,
        json() {
          return new Promise((resolve, reject) => resolve(testResponseData));
        },
      };
      resolve(testResponse);
    })
);

// Mocking Global Values
vi.stubGlobal("fetch", testFetch);

describe.concurrent("HTTP Tests", () => {
  describe.concurrent("sendDataRequest() ", () => {
    it("should return any available response data", () => {
      const testData = { key: "testKeyValue" };
      return expect(sendDataRequest(testData)).resolves.toEqual(
        testResponseData
      );
    });
  });
});
