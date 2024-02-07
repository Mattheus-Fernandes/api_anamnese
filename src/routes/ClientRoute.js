const ClientRoute = require("express").Router()


//Controller
const {registerClient} = require("../controller/ClientController")

//Middleware
const validate = require("../middlewares/handleValidation")
const {clientRegisterValidation} = require("../middlewares/clientValidation")


ClientRoute.post("/register/client", clientRegisterValidation(), validate, registerClient)


module.exports = ClientRoute