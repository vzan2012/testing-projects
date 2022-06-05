import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe.concurrent("Validation Errors - Tests", () => {
  describe.concurrent("class HttpError", () => {
    it("should contain status code, message and data", () => {
      const testStatusCode = 200;
      const testMessage = "Success";
      const testData = { title: "testTitle" };

      const httpErrorObj = new HttpError(testStatusCode, testMessage, testData);

      expect(httpErrorObj.statusCode).toStrictEqual(testStatusCode);
      expect(httpErrorObj.message).toStrictEqual(testMessage);
      expect(httpErrorObj.data).toBe(testData);
    });

    it("should contain undefined if no data is provided", () => {
      const testStatusCode = 200;
      const testMessage = "Success";

      const httpErrorObj = new HttpError(testStatusCode, testMessage);

      expect(httpErrorObj.statusCode).toStrictEqual(testStatusCode);
      expect(httpErrorObj.message).toStrictEqual(testMessage);
      expect(httpErrorObj.data).toBeUndefined();
    });
  });

  describe.concurrent(`class ValidationError`, () => {
    it("should contain the given message", () => {
      const testMessage = "Test Message";

      const validationErrorObj = new ValidationError(testMessage);

      expect(validationErrorObj.message).toBe(testMessage);
    });
  });
});
