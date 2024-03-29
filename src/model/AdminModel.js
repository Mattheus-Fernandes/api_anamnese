const Sequelize = require("sequelize")
const {connection} = require("../config/index")


const Admin = connection.define("admin", {
  
  name: {
    type: Sequelize.STRING,
    allowNull: false

  },

  email: {
    type: Sequelize.STRING,
    allowNull: false

  },
  password: {
    type: Sequelize.STRING,
    allowNull: false

  }
})


Admin.sync({force: false})

module.exports = Admin