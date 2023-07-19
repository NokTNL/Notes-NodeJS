# Installation

- Install:
  - 1. MySQL Community Server: https://dev.mysql.com/downloads/mysql/
    - Choose Legacy Password Encryption when installing, because NodeJS does not support Strong Password Encryption.
  - 2. (Only for Mac) MySQL Workbench: https://dev.mysql.com/downloads/workbench/
  - 3. `npm install mysql2` so that NodeJS can interact with MySQL
- Open MySQL Workbench, there should already be an instance of MySQL running. Click on the instance to look inside

# Creating Schemas & Tables

- Find "Schema Editor" to create a new schema. Click "Apply" and you will see a new schema created on the left
- Inside the new schema, select "Tables", right-click and select "Create Table".
  - `Name` is the name of the table, e.g. `products`
  - The rows below are different COLUMNS of the table; they hold key-value pairs for the table.
    - Column `id` can be:
      - Datatype `INT`
      - Primary Key (`PK`) ✅ <-- will use this to identify rows
      - Not Null (`NN`) ✅
      - Unique (`UQ`) ✅
      - Auto Incremented (`AI`) ✅
    - Column `title` can be
      - Datatype `VARCHAR(255)` (= 255 characters max. string; longer than that will be cut off)
      - Not Null (`NN`) ✅
    - Column `price` can be
      - Datatype `DECIMAL(10,2)` (this is an EXACT value type; = 10 digits max. (incl. decimals); 2 digits after decimal point)
        - You can use something like `DOUBLE` as well but that will not be exact
      - Not Null (`NN`) ✅
    - Column `description` can be
      - Datatype `LONGTEXT` (this can hold much longer strings)
      - Not Null (`NN`) ✅
    - etc...
- Click "Apply" to create the table

# Manipulating the Table

- On the left you will see the newly created table. Hover on the table, click the right-most icon (the one with a lightning on a table icon) to open a query screen (or, right-click on the table then select "Select Rows - Limit 1000")
- At the top, you will see the query string (this can be done in NodeJS as well):

  ```
  SELECT * FROM `hello-world`.products;
  ```

- You can add new items in the "Result Grid" tab below. Just key in new rows, and then click the "Apply" button to insert the rows

# Usage in NodeJS

- See `db/index.js`
