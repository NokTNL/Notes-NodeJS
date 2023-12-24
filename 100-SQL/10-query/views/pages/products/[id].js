import { html } from "code-tag";
import DocumentView from "../../components/document.js";
/**
 * @param {{title: string; description: string}} param0
 */
export default function ProductView({ title, description }) {
  return DocumentView({
    title,
    main: html`
      <h1>${title}</h1>
      <p>${description}</p>
    `,
  });
}
