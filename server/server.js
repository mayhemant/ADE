const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Running live ");
  });

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(process.env.PORT, () => {
  console.log(`Server Running Live at ${process.env.PORT}`);
});
