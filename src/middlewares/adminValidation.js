const { body } = require("express-validator")


const registerAdminValidation = () => {

  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres"),

    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório")
      .isEmail()
      .withMessage("Insira uma e-mail válido email@email.com"),

    body("password")
      .isString()
      .withMessage("A senha é obrigatória")
      .isLength({ min: 3 })
      .withMessage("A senha precisa ter 3 caracteres."),
  ]



} 


module.exports = {
  registerAdminValidation
}

