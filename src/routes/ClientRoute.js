const ClientRoute = require("express").Router()


//Controller
const {registerClient, getOneClient, getAllClients, editClient} = require("../controller/ClientController")

//Middleware
const validate = require("../middlewares/handleValidation")
const {clientValidation} = require("../middlewares/clientValidation")


ClientRoute.post("/register/client", clientValidation(), validate, registerClient)
ClientRoute.get("/one/client/:id", validate, getOneClient)
ClientRoute.get("/all/clients", validate, getAllClients)
ClientRoute.put("/edit/client/:id", clientValidation(), validate, editClient)


module.exports = ClientRoute