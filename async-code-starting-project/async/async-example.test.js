import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken() ", () => {
  // For CallBack func
  it("should generate a token value", (done) => {
    const testEmail = "test@test.com";

    generateToken(testEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBeCalled();
        // expect(token).toBe(2);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  // For promises
  it("should generate a token value", () => {
    const testEmail = "test@test.com";
    expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
  });

  // For async / await
  it("should generate a token value", async () => {
    const testEmail = "test@test.com";

    const token = await generateTokenPromise(testEmail);

    expect(token).toBeDefined();
  });
});
