import mysql from "mysql2/promise";

// You need open a CONNECTION to communicate with the database. However, connections will needed to be ENDED when you have finished using it.
// Instead, a POOL manages MULTIPLE connections so that you can reach out to it all the time.
// !!! Note that you are just isntantiating the pool here. You are not making a connection to the database yet.
const pool = mysql.createPool({
  // The info below can be found in the MySQL Workbench
  host: "localhost",
  user: "root",
  database: "hello-world", // This is the name you use when creating a new schema
  password: process.env.password, // This is the password you use when setting up the server
});

// To make a query to the database, pass in a SQL query string into `pool.execute()`
// `SELECT * FROM products` means "select all columns (= fields) from the `products` table"
pool
  .execute("SELECT * FROM products")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`Oops! pool.execute() failed!`);
    console.log(err);
  });

// export default pool;
