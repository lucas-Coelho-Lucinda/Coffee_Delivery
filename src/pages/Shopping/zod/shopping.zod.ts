import * as zod from "zod";
import { FormOrderSend } from "../../../Types/coffe";

const fieldGroups: {
  fields: {
    name: keyof FormOrderSend;
    size: string;
    placeholder: string;
    maxLength?: number;
    uppercaseText?: boolean;
    allowTypingNumbers: boolean;
  }[];
}[] = [
  {
    fields: [
      {
        name: "cep",
        placeholder: "CEP",
        size: "200px",
        maxLength: 8,
        allowTypingNumbers: true,
      },
    ],
  },
  {
    fields: [
      {
        name: "rua",
        placeholder: "Rua",
        size: "538px",
        allowTypingNumbers: false,
        maxLength: 74,
      },
    ],
  },
  {
    fields: [
      {
        name: "numero",
        placeholder: "Número",
        size: "200px",
        maxLength: 5,
        allowTypingNumbers: true,
      },
      {
        name: "complemento",
        placeholder: "Complemento",
        size: "348px",
        allowTypingNumbers: false,
        maxLength: 48,
      },
    ],
  },
  {
    fields: [
      {
        name: "bairro",
        placeholder: "Bairro",
        size: "348px",
        allowTypingNumbers: false,
        maxLength: 48,
      },
      {
        name: "cidade",
        placeholder: "Cidade",
        size: "360px",
        allowTypingNumbers: false,
        maxLength: 49,
      },
      {
        name: "UF",
        placeholder: "UF",
        size: "20px",
        maxLength: 2,
        uppercaseText: true,
        allowTypingNumbers: false,
      },
    ],
  },
];

const registerOrder = zod.object({
  UF: zod
    .string()
    .regex(/^[A-Za-zÀ-ÿ]+$/, {
      message: "UF inválida!",
    })
    .transform((val) => val.toLocaleUpperCase()),
  cep: zod.string().regex(/^[0-9]{5}[0-9]{3}$/, {
    message: "CEP inválido. Digite um com no máximo 9 caracteres.",
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
  modo_pagamento: zod
    .string({
      required_error: "Selecione uma forma de pagamento",
    })
    .min(1, {
      message: "Selecione uma forma de pagamento !",
    }),
});

export { registerOrder, fieldGroups };
