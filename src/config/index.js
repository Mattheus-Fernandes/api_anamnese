const Sequelize = require("sequelize")

const connection = new Sequelize("ficha_anamnese", "root", "14109015", {
  host: "localhost",
  dialect: "mysql"
})



const connect = () => {

  connection
    .authenticate()
    .then(() => {})
    .catch(err => console.log(err))

}


module.exports = {connection, connect}