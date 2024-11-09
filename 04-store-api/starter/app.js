const express = require("express");
const app = express();
require('express-async-errors')
const connectDB = require("./db/connect");
const errorhandler = require("./middleware/error-handler");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const productsRouter = require("./routes/products");


app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products" ,productsRouter);

app.use(errorhandler);
app.use(notFound);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
