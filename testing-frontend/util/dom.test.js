import fs from "fs";
import path from "path";

import { expect, it, vi } from "vitest";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

// Mock the Global - document
vi.stubGlobal("document", document);

it("should add an error paragraph into id=errors element", () => {
  showError("test message");

  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});
