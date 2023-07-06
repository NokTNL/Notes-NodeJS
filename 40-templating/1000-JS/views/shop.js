import { html } from "code-tag";
/**
 * @param {{products: string[]}} param0
 */
export default function ShopView({ products }) {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Shop</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/" aria-current="page">Shop</a></li>
              <li><a href="/add-product">Add Product</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>My Products</h1>
          ${products.length > 0
            ? html`<ul>
                ${products.map((product) => html`<li>${product}</li>`).join("")}
              </ul>`
            : html`<p>(No products)</p>`}
        </main>
      </body>
    </html>`;
}
