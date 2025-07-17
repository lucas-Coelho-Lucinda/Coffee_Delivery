import { uuidv4 } from "zod/v4-mini";
import { defaultTheme } from "../../../sytles/themes/default";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";

export const optionsOfPayments = [
  {
    id: uuidv4(),
    selected: false,
    form: "CARTÃO DE CRÉDITO",
    incone: <CreditCard size={24} color={defaultTheme["purple-300"]} />,
  },
  {
    id: uuidv4(),
    selected: false,
    form: "CARTÃO DE DÉBITO",
    incone: <Bank size={24} color={defaultTheme["purple-300"]} />,
  },
  {
    id: uuidv4(),
    selected: false,
    form: "DINHEIRO",
    incone: <Money size={24} color={defaultTheme["purple-300"]} />,
  },
];
