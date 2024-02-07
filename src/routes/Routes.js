const route = require("express").Router()


route.use("/api", require("./ClientRoute"))
route.use("/api", require("./AdminRoute"))

module.exports = route