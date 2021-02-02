module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Retrieve a single employee with employeeId
  router.get("/:id", employees.findOne);

  app.use('/employees', router);

};