import { html } from "code-tag";
import DocumentView from "../components/document.js";

export default function ErrorView() {
  return DocumentView({
    title: "500 Server Error",
    main: html`<h1>500 Server Error</h1>`,
  });
}
