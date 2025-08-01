import { ReactNode } from "react";
import { CoffeList, FormOrderSend } from "../Types/coffe";

export interface orderResquetfinishProps {
  orderInfo: FormOrderSend;
}

export interface totalCalculeOrder {
  valueTotalOfAllPayment: string;
  valueTotalOfAllItensSome: string;
  valueTotalOfAllDeliveryValue: string;
}

export interface listAllInforOfOrderProps {
  CoffeesInTheCart: CoffeList[];
  valueTotalOfAllPayment: string;
  valueTotalOfAllItensSome: string;
  valueTotalOfAllDeliveryValue: string;
}

export interface coffesAddedToCartContextProviderProps {
  children: ReactNode;
}
