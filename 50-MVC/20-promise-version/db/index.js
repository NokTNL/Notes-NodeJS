import { fileURLToPath } from "url";
import fs from "fs/promises";

const path = fileURLToPath(new URL("products.json", import.meta.url));

export async function getProducts() {
  /** @type {string[]} */
  let products = [];
  try {
    const productsStr = (await fs.readFile(path)).toString();
    products = JSON.parse(productsStr);
  } catch (err) {
    console.error(`Error reading files: ${err.message}`);
  }
  return products;
}

/**
 * @param {string} item
 */
export async function pushProduct(item) {
  try {
    const products = await getProducts();
    const newProducts = products.concat(item);
    await fs.writeFile(path, JSON.stringify(newProducts));
  } catch (err) {
    console.error(`Error writing files: ${err.message}`);
  }
}
