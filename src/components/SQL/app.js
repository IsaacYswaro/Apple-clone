const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const connected = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "myDBuser",
  database: "myDB",
});
connected.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
  let message = "Tables Created";
  let products = `CREATE TABLE if not exists Products(
      product_id int auto_increment,
      product_url varchar(255) not null,
      product_name varchar(255) not null,
      PRIMARY KEY (product_id)
  )`;
  let description = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  let price = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
  let user = `CREATE TABLE if not exists User(
    user_id int(11) auto_increment,
    user_name varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id)
  )`;

  let orders = `CREATE TABLE if not exists Orders(
    order_id int(11) auto_increment,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
  )`;

  connected.query(products, (err, results, fields) => {
    if (err) console.error("Error creating table:", err);
  });
  connected.query(description, (err, results, fields) => {
    if (err) console.error("Error creating table:", err);
  });
  connected.query(price, (err, results, fields) => {
    if (err) console.error("Error creating table:", err);
  });
  connected.query(user, (err, results, fields) => {
    if (err) console.error("Error creating table:", err);
  });
  connected.query(orders, (err, results, fields) => {
    if (err) console.error("Error creating table:", err);
  });
  res.end(message);
});

// a route handler for the POST request
app.post("/addProduct", (req, res) => {
  console.log(req, res);

  // Retrieve data from request body

  const prodUrl = req.body.product_url;
  const prodName = req.body.product_name;
  const prodBrief = req.body.product_brief_description;
  const prodDescription = req.body.product_description;
  const prodImage = req.body.product_img;
  const prodLink = req.body.product_link;
  const prodPrice = req.body.starting_price;
  const prodRange = req.body.price_range;
  const userName = req.body.user_name;
  const userPass = req.body.user_password;

  //     //* Use insert to add the form into the data base
  const insertProducts = `INSERT INTO Products (product_url, product_name) VALUES (?,?)`;
  const insertDescription = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description,product_img, product_link  ) VALUES (?,?,?,?,?)`;
  const insertPrice = `INSERT INTO ProductPrice(product_id, starting_price, price_range) VALUES (?,?,?)`;
  const insertUser = `INSERT INTO User(user_id, user_name, user_password) VALUES (?,?,?)`;
  const insertOrder = `INSERT INTO Orders( product_id,user_id) VALUES (?,?)`;

  //     // * Execute the above code to the data base
  connected.query(
    insertProducts,
    [prodUrl, prodName],
    (err, results, fields) => {
      if (err) {
        console.error("Error inserting product:", err);
      }
      console.table(results);
      console.log(results);
      // Add Product ID Variable
      let productId = results.insertId;
      connected.query(
        insertDescription,
        [productId, prodBrief, prodDescription, prodImage, prodLink],
        (err, results, fields) => {
          if (err) {
            console.error("Error inserting product description:", err);
          }
          console.table(results);
          console.log(results);
        }
      );
      connected.query(
        insertPrice,
        [productId, prodPrice, prodRange],
        (err, results, fields) => {
          if (err) {
            console.error("Error inserting product description:", err);
          }
          console.table(results);
          console.log(results);
        }
      );
      connected.query(
        insertUser,
        [productId, userName, userPass],
        (err, results, fields) => {
          if (err) {
            console.error("Error inserting product description:", err);
          }
          console.table(results);
          console.log(results);

          let userID = results.insertId;

          connected.query(
            insertOrder,
            [productId, userID],
            (err, results, fields) => {
              if (err) {
                console.error("Error inserting product description:", err);
              }
              console.table(results);
              console.log(results);
            }
          );
          res.send("Product added successfully");
        }
      );
    }
  );
});
// Express server to listen for incoming requests
app.listen(3333, () => {
  console.log("Listening on port 3333");
});
