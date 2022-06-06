import { beforeEach, describe, expect, it } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "Test Title";
const testContent = "Test Content";

let testFormData;

describe.concurrent(`extractPostData(form) - test`, () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });
  it("should extract title and content from the provided form data", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
