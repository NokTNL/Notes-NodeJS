import { fileURLToPath } from "url";
import fs from "fs/promises";
import { v4 as uuid } from "uuid";

const path = fileURLToPath(new URL("products.json", import.meta.url));

export async function getProducts() {
  /** @type {{name: string; id: string}[]} */
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
 * @param {string} itemName
 */
export async function pushProduct(itemName) {
  try {
    const products = await getProducts();
    const newProducts = products.concat({
      name: itemName,
      id: uuid(),
    });
    await fs.writeFile(path, JSON.stringify(newProducts));
  } catch (err) {
    console.error(`Error writing files: ${err.message}`);
  }
}

/** @param {string} targetId */
export async function getProductById(targetId) {
  const products = await getProducts();
  const targetProduct = products.find((product) => product.id === targetId);
  if (!targetProduct) {
    throw Error(`Product id ${targetId} not found`);
  }
  return targetProduct;
}
