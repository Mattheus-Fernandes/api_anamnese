const { body } = require("express-validator")

const clientRegisterValidation = () => {

  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres"),

    body("age")
      .isFloat()
      .withMessage("A idade é obrigatória")
      .isLength({ min: 1 })
      .withMessage("A idade precisa ter no mínimo um número"),

    body("adress")
      .isString()
      .withMessage("O endereço é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O endereço precisa ter no mínimo 3 caracteres"),

    body("whatsapp")
      .isString()
      .withMessage("O whatsapp é obrigatório")
      .isLength({ min: 9 })
      .withMessage("O WhatsApp precisa ter no mínimo 9 caracteres"),

    body("rg")
      .isString()
      .withMessage("O RG é obrigatório")
      .isLength({ min: 10 })
      .withMessage("O RG precisa ter no mínimo 10 caracteres"),

    body("cpf")
      .isString()
      .withMessage("O CPF é obrigatório")
      .isLength({ min: 11 })
      .withMessage("O CPF precisa ter no mínimo 11 caracteres"),

    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório")
      .isEmail()
      .withMessage("Insira uma e-mail válido email@email.com"),

    body("met")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),


    body("diabetes")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("allergy")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("allergySpecify")
      .isString(),

    body("cuticle")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("ringworm")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("ringwormSpecify")
      .isString(),

    body("useMedicine")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("nailBiting")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("ingrowToenail")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("blade")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("bladeSpecify")
      .isString(),

    body("sport")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("poolAndSea")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("whyStretching")
      .isString()
      .withMessage("Campo obrigatório")
      .isLength({ min: 3 })
      .withMessage("Precisa ter no mínimo 3 caracteres"),

    body("typeStretching")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("nailSize")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("nailFormat")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("details")
      .isString(),

    body("price")
      .isFloat()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),

    body("terms")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Campo obrigatório"),


  ]


}



module.exports = {
  clientRegisterValidation
}