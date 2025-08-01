import { createContext } from "react";
import { CoffeList } from "../Types/coffe";
import { listAllInforOfOrderProps, orderResquetfinishProps } from "./types";

export interface CoffesAddedToCartContextProps {
  orderResquetfinish: orderResquetfinishProps;
  coffesAndPaymentCurrent: listAllInforOfOrderProps;
  addedSelectedCoffeesToCart: (coffe: CoffeList[]) => void;
  saveOrderCurrent: (order: orderResquetfinishProps) => void;
  saveCoffeesCurrent: (coffe: listAllInforOfOrderProps) => void;
}

export const CoffesAddedToCartContext =
  createContext<CoffesAddedToCartContextProps>(
    {} as CoffesAddedToCartContextProps
  );
