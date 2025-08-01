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
  valueDefault: string;
  deliveryValue: string;
  deliveryValueDefault: string;
  amount: number;
  is_selected: boolean;
  coffeeCharacteristics: {
    id: string;
    adjective: string;
  }[];
  title: string;
  subTitles: string;
}
