module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  // Retrieve a single employee with employeeId
  app.get("/employees/:employeeId", employees.findOne);

   // Create a new Customer
  app.post("/employees", employees.create);

};