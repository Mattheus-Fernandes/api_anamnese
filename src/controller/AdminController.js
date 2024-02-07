const AdminModel = require("../model/AdminModel")
const brcypt = require("bcrypt")


const registerAdmin = async(req, res) => {

  const {name, email, password} = req.body
  const id = Math.floor(Math.random() * 500) + new Date().getMinutes() * 243046

  try {

    const admin = await AdminModel.findOne({where: {email}})

    if(admin) {
      res.status(422).json({ errors: ["Por favor, utilize outro e-mail."] })
      return
    }


    const salt = await brcypt.genSaltSync()
    const passwordHash = await brcypt.hashSync(password, salt)


    const newAdmin = await AdminModel.create({
      id, name, email,password: passwordHash
    })

    if(!newAdmin){
      res.status(422).json({
        errors: ["Hove um erro, por favor tente novamente mais tarde"]
      })

      return
    }

    res.status(200).json({
      id: newAdmin.id,
      name: newAdmin.name,
      email: newAdmin.email
    })

  }catch(error){
    console.log(error)
  }

}

module.exports = {
  registerAdmin
}