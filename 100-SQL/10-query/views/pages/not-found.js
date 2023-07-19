import { html } from "code-tag";
import DocumentView from "../components/document.js";

export default function NotFoundView() {
  return DocumentView({
    title: "404 Not Found",
    main: html`<h1>404 Not found</h1>`,
  });
}
