import Joi from "joi";

export const createClientSchema = Joi.object({
  nome: Joi.string().required().min(3).max(100).messages({
    "string.empty": "O campo nome é obrigatório",
    "string.min": "O nome deve ter no mínimo 3 caracteres",
    "string.max": "O nome deve ter no máximo 100 caracteres",
    "any.required": "O campo nome é obrigatório",
  }),
  email: Joi.string().required().email().max(150).messages({
    "string.empty": "O campo email é obrigatório",
    "string.email": "O email deve ser válido",
    "string.max": "O email deve ter no máximo 150 caracteres",
    "any.required": "O campo email é obrigatório",
  }),
  telefone: Joi.string()
    .required()
    .pattern(/^\d{10,11}$/)
    .messages({
      "string.empty": "O campo telefone é obrigatório",
      "string.pattern.base": "O telefone deve ter 10 ou 11 dígitos numéricos",
      "any.required": "O campo telefone é obrigatório",
    }),
});
