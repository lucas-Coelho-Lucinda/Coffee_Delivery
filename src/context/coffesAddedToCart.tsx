import { CoffeList } from "../Types/coffe";
import { CoffesAddedToCartContext } from "./coffesAddedContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import { commitCoffeesAndReturnValues, saveOrderFinished } from "../Backup";

import {
  orderResquetfinishProps,
  listAllInforOfOrderProps,
  coffesAddedToCartContextProviderProps,
} from "./types";

export const CoffesAddedToCartContextProvider = ({
  children,
}: coffesAddedToCartContextProviderProps) => {
  const [orderResquetfinish, setOrderResquetfinishCurrent] =
    useState<orderResquetfinishProps>({
      orderInfo: {
        UF: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        complemento: "",
        modo_pagamento: "",
      },
    });

  const saveOrderCurrent = useCallback((order: orderResquetfinishProps) => {
    setOrderResquetfinishCurrent(order);
    saveOrderFinished(order);
  }, []);

  useEffect(() => {
    const onStorageChange = () => {
      try {
        const data = localStorage.getItem("currentOrder");
        const list: orderResquetfinishProps = data ? JSON.parse(data) : [];
        setOrderResquetfinishCurrent(list);
      } catch (error) {
        console.error("Error updating order:", error);
      }
    };
    window.addEventListener("changeOrder", onStorageChange);

    return () => {
      window.removeEventListener("changeOrder", onStorageChange);
    };
  }, [saveOrderCurrent]);

  const [coffesAndPaymentCurrent, setCoffesAndPaymentCurrent] =
    useState<listAllInforOfOrderProps>({
      CoffeesInTheCart: [],
      valueTotalOfAllPayment: "",
      valueTotalOfAllItensSome: "",
      valueTotalOfAllDeliveryValue: "",
    });

  const saveCoffeesCurrent = useCallback((coffe: listAllInforOfOrderProps) => {
    setCoffesAndPaymentCurrent(coffe);
  }, []);

  useEffect(() => {
    const listOfCurrentlySafeCoffee =
      localStorage.getItem("currentListOfCoffe");
    const listCoffesSave = listOfCurrentlySafeCoffee
      ? JSON.parse(listOfCurrentlySafeCoffee)
      : [];

    requestAnimationFrame(() => {
      saveCoffeesCurrent(listCoffesSave);
    });

    const onStorageChange = () => {
      try {
        const currentListCoffeSave = localStorage.getItem("currentListOfCoffe");

        const list: listAllInforOfOrderProps = currentListCoffeSave
          ? JSON.parse(currentListCoffeSave)
          : [];
        setCoffesAndPaymentCurrent(list);
      } catch (error) {
        console.error("Error updating coffee list:", error);
      }
    };

    window.addEventListener("coffeListChanged", onStorageChange);
    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("coffeListChanged", onStorageChange);
      window.removeEventListener("storage", onStorageChange);
    };
  }, [saveCoffeesCurrent]);

  const makeBackupOfAllListOfCoffes = (coffes: CoffeList[]) => {
    commitCoffeesAndReturnValues(coffes, true);
  };

  const addedSelectedCoffeesToCart = useCallback((coffes: CoffeList[]) => {
    makeBackupOfAllListOfCoffes(coffes);
  }, []);

  const value = useMemo(
    () => ({
      saveOrderCurrent,
      saveCoffeesCurrent,
      orderResquetfinish,
      coffesAndPaymentCurrent,
      addedSelectedCoffeesToCart,
    }),
    [
      saveOrderCurrent,
      saveCoffeesCurrent,
      orderResquetfinish,
      coffesAndPaymentCurrent,
      addedSelectedCoffeesToCart,
    ]
  );

  return (
    <CoffesAddedToCartContext.Provider value={value}>
      {children}
    </CoffesAddedToCartContext.Provider>
  );
};
