module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    birth_date: {
      type: Sequelize.DATE
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.ENUM('M','F')
    },
    hire_date: {
      type: Sequelize.DATE
    }
  });

  return Employee;
};