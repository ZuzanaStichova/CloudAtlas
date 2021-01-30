const sql = require("./db.js");

// constructor
const Employee = function(employee) {
  this.birth_date = employee.birth_date;
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.gender = employee.gender;
  this.hire_date = employee.hire_date;
};



Employee.create = (newEmployee, result) => {
  sql.query("INSERT INTO employees SET ?", newEmployee, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created employee: ", { id: res.insertId, ...newEmployee });
    result(null, { id: res.insertId, ...newEmployee });
  });
};



Employee.findById = (employeeId, result) => {
  sql.query(`SELECT * FROM employees WHERE emp_no = ${employeeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found employee: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Emplyee with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Employee;