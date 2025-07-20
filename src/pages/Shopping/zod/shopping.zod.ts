import * as zod from "zod";

const registerOrder = zod.object({
  UF: zod.string().regex(/^[A-Za-zÀ-ÿ]+$/, {
    message: "UF inválida!",
  }).transform((val)=> val.toLocaleUpperCase()),
  cep: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/, {
    message: "CEP inválido. Digite somente números no formato ex: XXXXX-XXX.",
  }),
  rua: zod
    .string()
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, "Rua inválida!")
    .refine((val) => val.replace(/\s/g, "").length >= 10, {
      message: "Rua digitada inválida!",
    }),
  numero: zod.string().regex(/^\d{1,5}$/, {
    message: "Número da residência inválido!",
  }),
  bairro: zod
    .string()
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, "Bairro inválido!")
    .refine((val) => val.replace(/\s/g, "").length >= 8, {
      message: "Bairro preenchido inválido!",
    }),
  cidade: zod
    .string()
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, "Cidade inválida!")
    .refine((val) => val.replace(/\s/g, "").length >= 8, {
      message: "Cidade preenchida inválida!",
    }),
  complemento: zod.string().optional(),
  modo_pagamento: zod.string({
    required_error: "Selecione uma forma de pagamento"
  }).min(1, {
    message: "Selecione uma forma de pagamento !",
  }),
});

export default registerOrder;
