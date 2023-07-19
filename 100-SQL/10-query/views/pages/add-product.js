import { html } from "code-tag";
import DocumentView from "../components/document.js";

export default function AddProductView() {
  return DocumentView({
    title: "Add Product",
    main: html`
      <form action="/add-product" method="POST">
        <input type="text" name="name" />
        <button type="submit">Add Product</button>
      </form>
    `,
  });
}
