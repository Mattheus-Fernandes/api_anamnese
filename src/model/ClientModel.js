const Sequelize = require("sequelize")
const {connection} = require("../config/index")


const Client = connection.define("client", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  age: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  adress: {
    type: Sequelize.STRING,
    allowNull: false
  },

  whatsapp: {
    type: Sequelize.STRING,
    allowNull: false
  },

  rg: {
    type: Sequelize.STRING,
    allowNull: false
  },

  cpf: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  met: {
    type: Sequelize.STRING,
    allowNull: false
  },

  diabetes: {
    type: Sequelize.STRING,
    allowNull: false
  },

  allergy: {
    type: Sequelize.STRING,
    allowNull: false
  },

  allergySpecify: {
    type: Sequelize.STRING,
  },

  cuticle: {
    type: Sequelize.STRING,
    allowNull: false
  },

  ringworm: {
    type: Sequelize.STRING,
    allowNull: false
  },

  ringwormSpecify: {
    type: Sequelize.STRING,
  },

  useMedicine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  nailBiting: {
    type: Sequelize.STRING,
    allowNull: false
  },

  ingrowToenail: {
    type: Sequelize.STRING,
    allowNull: false
  },

  blade: {
    type: Sequelize.STRING,
  },
  
  bladeSpecify: {
    type: Sequelize.STRING,
  },

  sport: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  poolAndSea: {
    type: Sequelize.STRING,
    allowNull: false
  },

  whyStretching: {
    type: Sequelize.STRING,
  },

  typeStretching: {
    type: Sequelize.STRING,
    allowNull: false
  },

  nailSize: {
    type: Sequelize.STRING,
    allowNull: false
  },

  nailFormat: {
    type: Sequelize.STRING,
    allowNull: false
  },

  details: {
    type: Sequelize.STRING,
  },
  terms: {
    type: Sequelize.STRING,
    allowNull: false
  }

})


Client.sync({force: false})

module.exports = Client