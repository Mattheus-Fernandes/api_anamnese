const ClientRoute = require("express").Router()


//Controller
const {registerCleint} = require("../controller/ClientController")


ClientRoute.post("/register/client", registerCleint)


module.exports = ClientRoute