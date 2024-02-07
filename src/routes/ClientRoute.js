const ClientRoute = require("express").Router()


//Controller
const {registerClient, getOneClient} = require("../controller/ClientController")

//Middleware
const validate = require("../middlewares/handleValidation")
const {clientRegisterValidation} = require("../middlewares/clientValidation")


ClientRoute.post("/register/client", clientRegisterValidation(), validate, registerClient)
ClientRoute.get("/one/client/:id", validate, getOneClient)


module.exports = ClientRoute