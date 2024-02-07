const route = require("express").Router()


route.use("/api", require("./ClientRoute"))

module.exports = route