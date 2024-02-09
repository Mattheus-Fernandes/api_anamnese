const { body } = require("express-validator")

const clientValidation = () => {

  return [
    body("name")
      .isString()
      .withMessage({
        name: "Campo obrigatório"
      })
      .isLength({ min: 3 })
      .withMessage({
        name: "O nome precisa ter no mínimo 3 caracteres"
      }),

    body("age")
      .isFloat()
      .withMessage({
        age: "Campo obrigatório"
      })
      .isLength({ min: 1 })
      .withMessage({
        age: "A idade precisa ter no mínimo um número"
      }),

    body("adress")
      .isString()
      .withMessage({
        adress: "Campo obrigatório"
      })
      .isLength({ min: 3 })
      .withMessage({
        adress: "O endereço precisa ter no mínimo 3 caracteres"
      }),

    body("whatsapp")
      .isString()
      .withMessage({
        whatsapp: "Campo obrigatório"
      })
      .isLength({ min: 9 })
      .withMessage({
        whatsapp: "O WhatsApp precisa ter no mínimo 9 caracteres"
      }),

    body("rg")
      .isString()
      .withMessage({
        rg: "Campo obrigatório"
      })
      .isLength({ min: 10 })
      .withMessage({
        rg: "O RG precisa ter no mínimo 10 caracteres"
      }),

    body("cpf")
      .isString()
      .withMessage({
        cpf: "Campo obrigatório"
      })
      .isLength({ min: 11 })
      .withMessage({
        cpf: "O CPF precisa ter no mínimo 11 caracteres"
      }),

    body("email")
      .isString()
      .withMessage({
        email: "Campo obrigatório"
      })
      .isEmail()
      .withMessage({
        email: "Insira uma e-mail válido email@email.com"
      }),

    body("met")
      .notEmpty()
      .withMessage({
        met: "Campo obrigatório"
      }),


    body("diabetes")
      .notEmpty()
      .withMessage({
        diabetes: "Campo obrigatório"
      }),

    body("allergy")
      .notEmpty()
      .withMessage({
        allergy: "Campo obrigatório"
      }),

    //optional
    body("allergySpecify"),

    body("cuticle")
      .notEmpty()
      .withMessage({
        cuticle: "Campo obrigatório"
      }),

    body("ringworm")
      .notEmpty()
      .withMessage({
        ringworm: "Campo obrigatório"
      }),

    //optional
    body("ringwormSpecify"),

    body("useMedicine")
      .notEmpty()
      .withMessage({
        useMedice: "Campo obrigatório"
      }),

    body("nailBiting")
      .notEmpty()
      .withMessage({
        nailBiting: "Campo obrigatório"
    }),

    body("ingrowToenail")
      .notEmpty()
      .withMessage({
        ingrowToenail: "Campo obrigatório"
      }),

    //optional
    body("blade"),

    //optional
    body("bladeSpecify"),

    body("sport")
      .notEmpty()
      .withMessage({
        sport: "Campo obrigatório"
      }),

    body("poolAndSea")
      .notEmpty()
      .withMessage({
        poolAndSea: "Campo obrigatório"
      }),

    body("whyStretching"),

    body("typeStretching")
      .notEmpty()
      .withMessage({
        typeStretching: "Campo obrigatório"
      }),

    body("nailSize")
      .notEmpty()
      .withMessage({
        nailSize: "Campo obrigatório"
      }),

    body("nailFormat")
      .notEmpty()
      .withMessage({
        nailFormat: "Campo obrigatório"
      }),

    //optional
    body("details"),

    //optional
    body("price"),

    body("terms")
      .notEmpty()
      .withMessage({
        terms: "Campo obrigatório"
      })

  ]


}



module.exports = {
  clientValidation
}