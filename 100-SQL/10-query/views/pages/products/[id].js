import { html } from "code-tag";
import DocumentView from "../../components/document.js";
/**
 * @param {{title: string}} param0
 */
export default function ProductView({ title }) {
  return DocumentView({
    title,
    main: html`<h1>${title}</h1>`,
  });
}
