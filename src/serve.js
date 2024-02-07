const express = require("express")
const app = express()
const port = 8000
const cors = require("cors")


//Config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//Solver CORS
app.use(cors())


//Connection DB
require("./config/index").connect()

//Model
require("./model/ClientModel")
require("./model/AdminModel")

//Test route
app.get("/", (req, res) => {
  res.send("API Working")
})


app.listen(port, () => console.log(`The serve is running on the port ${port}`))
