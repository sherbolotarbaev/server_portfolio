require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 2006;

const router = require("./routes/Router.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use(express.static("public"));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
