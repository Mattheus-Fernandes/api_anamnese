const Sequelize = require("sequelize")
const {connection} = require("../config/index")


const Admin = connection.define("admin", {
  email: {
    type: Sequelize.STRING,
    allowNull: false

  },

  password: {
    type: Sequelize.STRING,
    allowNull: false

  }
})


Admin.sync({force: true})

module.exports = Admin