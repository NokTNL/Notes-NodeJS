import { fileURLToPath } from "url";
import fs from "fs";

/** @param {(data: string[]) => void} callback receives the read data */
export function getProducts(callback) {
  const path = fileURLToPath(new URL("products.json", import.meta.url));
  fs.readFile(path, (err, data) => {
    /** @type {string[]} */
    let products = [];
    // Only if the file exists (no error), then we read from the file
    if (!err) {
      products = JSON.parse(data.toString());
    }
    callback(products);
  });
}

/**
 * @param {string} item
 * @param {() => void} callback
 */
export function pushProduct(item, callback) {
  const path = fileURLToPath(new URL("products.json", import.meta.url));

  getProducts((products) => {
    const newProducts = products.concat(item);

    fs.writeFile(path, JSON.stringify(newProducts), (err) => {
      if (err) {
        console.error(`Error writing files: ${err.message}`);
        return;
      }
      callback();
    });
  });
}
