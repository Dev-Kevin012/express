import express from "express";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log("In the MiddleWare!");
});

app.listen(3000, () => console.log("Server is Running!"));
