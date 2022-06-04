import {
  describe,
  expect,
  it,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from "vitest";
import { User } from "./hooks";

const testEmail = "test@test.com";
const newEmail = "test6@test6.com";
let user = new User(testEmail);

beforeAll(() => console.log(`beforeAll() called`));
beforeEach(() => {
  console.log(`beforeEach() called`);
  // user = new User(testEmail);
});
afterAll(() => console.log(`afterAll() called`));
afterEach(() => {
  console.log(`afterEach() called`);
  user = new User(testEmail);
});

describe.concurrent("Hooks Tests - ", () => {
  it.concurrent("should update the email", () => {
    user.updateEmail(newEmail);

    expect(user.email).toBe(newEmail);
  });

  it.concurrent("should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  it.concurrent("should stored the provided email value", () => {
    expect(user.email).toBe(testEmail);
  });

  it.concurrent("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  it.concurrent(
    "should have an email property after clearing email value",
    () => {
      user.clearEmail();

      expect(user).toHaveProperty("email");
    }
  );
});
