import fs from "fs";
import path from "path";

import { beforeEach, describe, expect, it, vi } from "vitest";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

// Mock the Global - document
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

describe.concurrent("DOM Tests", () => {
  it("should add an error paragraph into id=errors element", () => {
    showError("test message");

    const errorElement = document.getElementById("errors");
    const errorParagraph = errorElement.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it("should not contain error paragraph initially", () => {
    const errorElement = document.getElementById("errors");
    const errorParagraph = errorElement.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it("should output the provided message in the error paragraph", () => {
    const testMessage = "test message";
    showError(testMessage);

    const errorElement = document.getElementById("errors");
    const errorParagraph = errorElement.firstElementChild;

    expect(errorParagraph.textContent).toBe(testMessage);
  });
});
