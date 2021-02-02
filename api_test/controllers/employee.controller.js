const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;


// Find a single Customer with a customerId
  exports.findOne = (req, res) =>  {
    const id = req.params.id;
  
    Employee.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Employee with id=" + id
        });
      });
  };