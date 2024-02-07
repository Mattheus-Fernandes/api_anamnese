const ClientRoute = require("express").Router()


//Controller
const {registerCleint} = require("../controller/ClientController")

//Middleware
const validate = require("../middlewares/handleValidation")


ClientRoute.post("/register/client", validate, registerCleint)


module.exports = ClientRoute