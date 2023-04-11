require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 2006;

const router = require("./routes/Router.js");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected To MongoDB..."))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
