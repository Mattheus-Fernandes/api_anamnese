const AdminRoute = require("express").Router()

//Controller
const {registerAdmin, login} = require("../controller/AdminController")

//Middleware
const validate = require("../middlewares/handleValidation")
const {registerAdminValidation, loginAdminValidation} = require("../middlewares/adminValidation")


AdminRoute.post("/register/admin", registerAdminValidation() ,validate, registerAdmin)
AdminRoute.post("/login/admin", loginAdminValidation(), validate, login)


module.exports = AdminRoute