/**
 * @typedef {{id: number, title: string, price: number, description: string}} Product
 */

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "hello-world",
  password: process.env.MYSQL_PASSWORD,
});

export async function getProducts() {
  /**
   * @type {[Product[], mysql.FieldPacket[]]}
   */
  // @ts-ignore
  const [products, fieldData] = await pool.execute("SELECT * FROM products");
  return products;
}

/**
 * @param {Omit<Product, "id">} product
 */
export async function pushProduct(product) {
  // 🤯 no error handling
  /**
   * @type {[mysql.ResultSetHeader, unknown]}
   */
  const [resultHeader] = await pool.execute(
    `INSERT INTO products (title, price, description) VALUES ('${product.title}',${product.price},'${product.description}')`
  );
  return {
    id: resultHeader.insertId,
    ...product,
  };
}

/** @param {string} targetId */
export async function getProductById(targetId) {
  /**
   * @type {[Product[], mysql.FieldPacket[]]}
   */
  // @ts-ignore
  const [products] = await pool.execute(
    `SELECT * FROM products WHERE id = ${targetId}`,
    [targetId]
  );
  const targetProduct = products[0];
  if (!targetProduct) {
    throw Error(`Product id ${targetId} not found`);
  }
  return targetProduct;
}
