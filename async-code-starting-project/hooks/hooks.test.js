import { describe, expect, it } from "vitest";
import { User } from "./hooks";

describe("Hooks Tests - ", () => {
  it("should update the email", () => {
    const testEmail = "test@test.com";
    const newEmail = "test6@test6.com";

    const user = new User(testEmail);
    user.updateEmail(newEmail);

    expect(user.email).toBe(newEmail);
  });

  it("should have an email property", () => {
    const testEmail = "test6@test6.com";

    const user = new User(testEmail);

    expect(user).toHaveProperty("email");
  });

  it("should stored the provided email value", () => {
    const testEmail = "test6@test6.com";

    const user = new User(testEmail);

    expect(user.email).toBe(testEmail);
  });

  it("should clear the email", () => {
    const testEmail = "test6@test6.com";

    const user = new User(testEmail);

    user.clearEmail();

    expect(user.email).toBe("");
  });

  it("should have an email property after clearing email value", () => {
    const testEmail = "test6@test6.com";

    const user = new User(testEmail);
    user.clearEmail();

    expect(user).toHaveProperty("email");
  });
});
