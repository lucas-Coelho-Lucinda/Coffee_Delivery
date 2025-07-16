import { ReactNode, useState, createContext, useCallback } from "react";
import { CoffeList, FormOrderSend, totalCalculeOrder } from "../Types/coffe";
import { CalculateValuesOfCoffeForAllItens } from "../functions/result";

interface CoffesAddedToCartContextProps {
  numberOfCoffeesInTheCart: number;
  listCoffeesInTheCart: CoffeList[];
  totalOfValueCoffe: totalCalculeOrder;
  addedSelectedCoffeesToCart: (coffe: CoffeList[], countNumber: number) => void;
  orderResquetfinish: FormOrderSend;
  setOrderResquetfinish: React.Dispatch<FormOrderSend>;
}

interface CoffesAddedToCartContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CoffesAddedToCartContext =
  createContext<CoffesAddedToCartContextProps>(
    {} as CoffesAddedToCartContextProps
  );

export function CoffesAddedToCartContextProvider({
  children,
}: CoffesAddedToCartContextProviderProps) {
  const [numberOfCoffeesInTheCart, setNumberOfCoffeesInTheCart] =
    useState<number>(0);
  const [listCoffeesInTheCart, setListCoffeesInTheCart] = useState<CoffeList[]>(
    []
  );

  const [orderResquetfinish, setOrderResquetfinish] = useState<FormOrderSend>({
    UF: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    modo_pagamento: "",
    complemento: "",
  });
  const [totalOfValueCoffe, setTotalOfValueCoffe] = useState<totalCalculeOrder>(
    {
      valueTotalOfAllPayment: "",
      valueTotalOfAllItensSome: "",
      valueTotalOfAllDeliveryValue: "",
    }
  );

  const addedSelectedCoffeesToCart = useCallback(
    (coffe: CoffeList[], countNumber: number) => {
      const results = CalculateValuesOfCoffeForAllItens(coffe);
      setTotalOfValueCoffe(results);
      setListCoffeesInTheCart(coffe);
      setNumberOfCoffeesInTheCart(countNumber);
    },
    []
  );
  return (
    <CoffesAddedToCartContext.Provider
      value={{
        addedSelectedCoffeesToCart,
        totalOfValueCoffe,
        listCoffeesInTheCart,
        numberOfCoffeesInTheCart,
        orderResquetfinish,
        setOrderResquetfinish,
      }}
    >
      {children}
    </CoffesAddedToCartContext.Provider>
  );
}
