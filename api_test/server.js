const cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.options('*', cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bla bla" });
});

require("./routes/employee.routes.js")(app);

// set port, listen for requests
app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});