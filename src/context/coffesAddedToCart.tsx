import { ReactNode, createContext, useCallback, useState } from "react";
import { CoffeList, FormOrderSend } from "../Types/coffe";
import { CalculateValuesOfCoffeForAllItens } from "../Operations";

interface listAllInforOfOrderProps {
  CoffeesInTheCart: CoffeList[];
  valueTotalOfAllPayment: string;
  valueTotalOfAllItensSome: string;
  valueTotalOfAllDeliveryValue: string;
}

interface orderResquetfinishProps {
  orderInfo: FormOrderSend;
}

interface CoffesAddedToCartContextProps {
  lisItensOfOrder: listAllInforOfOrderProps;
  orderResquetfinish: orderResquetfinishProps;
  saveOrder: (order: orderResquetfinishProps) => void;
  addedSelectedCoffeesToCart: (coffe: CoffeList[]) => void;
  setlisItensOfOrder: React.Dispatch<
    React.SetStateAction<listAllInforOfOrderProps>
  >;
}

interface CoffesAddedToCartContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CoffesAddedToCartContext =
  createContext<CoffesAddedToCartContextProps>(
    {} as CoffesAddedToCartContextProps
  );

export const CoffesAddedToCartContextProvider = ({
  children,
}: CoffesAddedToCartContextProviderProps) => {
  const [orderResquetfinish, setOrderResquetfinish] =
    useState<orderResquetfinishProps>({
      orderInfo: {
        UF: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        modo_pagamento: "",
        complemento: "",
      },
    });

  const [lisItensOfOrder, setlisItensOfOrder] =
    useState<listAllInforOfOrderProps>({
      CoffeesInTheCart: [],
      valueTotalOfAllPayment: "",
      valueTotalOfAllItensSome: "",
      valueTotalOfAllDeliveryValue: "",
    });

  const saveOrder = (order: orderResquetfinishProps) => {
    setOrderResquetfinish(order);
  };

  const addedSelectedCoffeesToCart = useCallback((coffe: CoffeList[]) => {
    const results = CalculateValuesOfCoffeForAllItens(coffe);
    setlisItensOfOrder(results);
  }, []);
  return (
    <CoffesAddedToCartContext.Provider
      value={{
        saveOrder,
        lisItensOfOrder,
        orderResquetfinish,
        setlisItensOfOrder,
        addedSelectedCoffeesToCart,
      }}
    >
      {children}
    </CoffesAddedToCartContext.Provider>
  );
};
