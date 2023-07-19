/**
 * @typedef {{id: number, title: string, price: number, description: string, imageUrl: string}} Product
 */

import { html } from "code-tag";
import DocumentView from "../components/document.js";
/**
 * @param {{products: Product[]}} param0
 */
export default function ShopView({ products }) {
  return DocumentView({
    title: "My Shop",
    main: html`
      <h1>My Products</h1>
      ${products.length > 0
        ? html`<ul>
            ${products
              .map(
                (product) =>
                  html`<li>
                    <a href="/products/${product.id.toString()}"
                      >${product.title}</a
                    >
                  </li>`
              )
              .join("")}
          </ul>`
        : html`<p>(No products)</p>`}
    `,
  });
}
