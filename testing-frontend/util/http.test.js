import { describe, it, expect, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetchPromise = (url, options, status = true) => {
  return new Promise((resolve, reject) => {
    if (status === true) {
      if (typeof options.body !== "string") {
        return reject("Not a string !!!");
      }
    }
    const testResponse = {
      ok: status,
      json() {
        return new Promise((resolve, reject) => resolve(testResponseData));
      },
    };
    resolve(testResponse);
  });
};
const testFetch = vi.fn((url, options) => testFetchPromise(url, options));

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

    it(`should the convert data to json object`, async () => {
      const testData = { key: "testValue" };
      let errorMessage = "";
      try {
        await sendDataRequest(testData);
      } catch (e) {
        errorMessage = e;
      }

      expect(errorMessage).not.toBe("Not a string !!!");
    });

    it("should throw a HTTPError in case of non-ok response", () => {
      const testData = { key: "testValue" };

      testFetch.mockImplementationOnce((url, options) =>
        testFetchPromise(url, options, false)
      );

      return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(
        HttpError
      );
    });
  });
});
