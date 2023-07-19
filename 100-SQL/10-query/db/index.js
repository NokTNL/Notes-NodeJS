/**
 * @typedef {{id: number, title: string, price: number, description: string, imageUrl: string}} Product
 */

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "hello-world",
  password: process.env.password,
});

export async function getProducts() {
  /**
   * @type {[Product[], mysql.FieldPacket[]]}
   */
  // @ts-ignore
  // This query string gets all columns from the table
  // - Note: `from` also works. But `FROM` (all caps) make it more obvious that it is an SQL keyword
  const [products, fieldData] = await pool.execute("SELECT * FROM products");
  // The query returns a nested array:
  // - the first element is an array of the matching rows
  // - the second element is an array of the metadata.
  return products;
}

/**
 * @param {string} itemName
 */
export async function pushProduct(itemName) {
  // Query string for inserting a new row into the table
  // - `?` means a DYNAMIC PARAMETER, which we will pass in as an array in the second argument
  // - Of course, you can use template literal to achive that as well
  await pool.execute(
    `INSERT INTO products (title, price, description, imageUrl) VALUES (?,?,?,?)`,
    [itemName, 10.12, "A test product XYZ", "/dummy.png"]
  );
}

/** @param {string} targetId */
export async function getProductById(targetId) {
  /**
   * @type {[Product[], mysql.FieldPacket[]]}
   */
  // @ts-ignore
  // This query string restricts the rows returned based on certain conditions
  const [products] = await pool.execute("SELECT * FROM products WHERE id = ?", [
    targetId,
  ]);
  const targetProduct = products[0];
  if (!targetProduct) {
    throw Error(`Product id ${targetId} not found`);
  }
  return targetProduct;
}
