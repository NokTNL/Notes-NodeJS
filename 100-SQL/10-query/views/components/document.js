import { html } from "code-tag";

/**
 * @param {{title: string; main: string}} param0
 * @returns
 */
export default function DocumentView({ title, main }) {
  return html` <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/styles.css" />
      <title>${title}</title>
    </head>
    <body>
      <header>
        <nav>
          <ul>
            <li><a href="/">Shop</a></li>
            <li><a href="/add-product" aria-current="page">Add Product</a></li>
          </ul>
        </nav>
      </header>
      <main>${main}</main>
    </body>
  </html>`;
}
