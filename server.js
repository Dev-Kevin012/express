import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(`<form action="/add" method="post">
      <input type="text" name="title" />
      <input type="text" name="size" />
      <button type="submit">Add Product</button>
    </form>`);
});

app.use("/add", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => res.send("<h1>Hello World!<h1>"));

app.listen(3000, () => console.log("Server is Running!"));
