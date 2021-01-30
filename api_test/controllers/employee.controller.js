const Employee = require("../models/employee.model.js");
const Employees = require("../models/employee.model.js");

// Find a single Customer with a customerId
  exports.findOne = (req, res) => {
    Employees.findById(req.params.employeeId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Employee with id ${req.params.employeeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Employee with id " + req.params.employeeId
          });
        }
      } else res.send(data);
    });
  };


  exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a emplyee
    const employee = new Employee({
      birth_date: req.body.birth_date,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      hire_date: req.body.hire_date
    });
  
    // Save Customer in the database
    Employee.create(employee, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the employee."
        });
      else res.send(data);
    });
  };
