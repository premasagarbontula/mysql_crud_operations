const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const db = require("./config/db");

//rest object
const app = express();

//middleware
app.use(express.json());
app.use("/api/v1/students", require("./routes/studentRoutes"));
app.use(morgan("combined"));

dotenv.config();

//port
const PORT = process.env.PORT || 8000;

db.query("SELECT 1")
  .then((res) => {
    console.log("MySql Database Connected".bgCyan.white);
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`.bgMagenta.white);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/test", (req, res) => {
  res.send("Hello");
});
