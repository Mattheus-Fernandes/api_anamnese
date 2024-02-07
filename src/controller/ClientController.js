const ClientModel = require("../model/ClientModel")


const registerClient = async (req, res) => {

  const {
    name, age, adress, whatsapp, rg, cpf, email, met, diabetes, allergy, allergySpecify, cuticle, ringworm, ringwormSpecify, useMedicine, nailBiting, ingrowToenail, blade, bladeSpecify, sport, poolAndSea, whyStretching, typeStretching, nailSize, nailFormat, details, price, terms
  } = req.body

  const id = Math.floor(Math.random() * 500) + new Date().getMinutes() * 243046
  try {

    const newClient = await ClientModel.create({
     id, name, age, adress, whatsapp, rg, cpf, email, met, diabetes, allergy, allergySpecify, cuticle, ringworm, ringwormSpecify, useMedicine, nailBiting, ingrowToenail, blade, bladeSpecify, sport, poolAndSea, whyStretching, typeStretching, nailSize, nailFormat, details, price, terms
    })

    if(!newClient){
      res.status(422).json({
        errors: ["Houve um erro, por favorr tente novamente mais tarde"]
      })

      return
    }

    res.status(201).json({
      name: newClient.name,
      id: newClient.id
    })

  }catch(error){
    console.log(error)
  }


}


module.exports = {
  registerClient
}