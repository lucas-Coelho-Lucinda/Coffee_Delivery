import { JSX } from "react";

export interface totalCalculeOrder {
  valueTotalOfAllPayment: string;
  valueTotalOfAllItensSome: string;
  valueTotalOfAllDeliveryValue: string;
}

export interface FormOrderSend {
  UF: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  modo_pagamento: string;
  complemento?: string | undefined;
}

export interface CoffeList {
  id: string;
  img: string;
  value: string;
  value_default: string;
  delivery_value: string;
  delivery_value_default: string;
  amount: number;
  is_selected: boolean;
  CoffeeCharacteristics: {
    id: string;
    adjective: string;
  }[];
  title: string;
  SubTitles: string;
}

export interface buttonForm {
  id: string;
  selected: boolean;
  form: string;
  incone: JSX.Element;
}
