import fs from "fs";
import path from "path";

import { it, vi } from "vitest";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal("document", document);

it("Initial test", () => {
  showError("test message");
});
