import { CoffeList } from "../Types/coffe";
import { calculateValuesOfCoffeForAllItens } from "../Operations";
import {
  listAllInforOfOrderProps,
  orderResquetfinishProps,
} from "../context/types";

export function commitCoffeesAndReturnValues(
  coffes: CoffeList[],
  enableRealTimeOrderUpdate: boolean
) {
  try {
    const resultsOfCaculeListOfCoffe =
      calculateValuesOfCoffeForAllItens(coffes);
    const valueToSave = {
      CoffeesInTheCart: resultsOfCaculeListOfCoffe?.CoffeesInTheCart,
      valueTotalOfAllItensSome:
        resultsOfCaculeListOfCoffe?.valueTotalOfAllItensSome,
      valueTotalOfAllPayment:
        resultsOfCaculeListOfCoffe?.valueTotalOfAllPayment,
      valueTotalOfAllDeliveryValue:
        resultsOfCaculeListOfCoffe?.valueTotalOfAllDeliveryValue,
    };

    localStorage.setItem("currentListOfCoffe", JSON.stringify(valueToSave));
    if (enableRealTimeOrderUpdate) {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("coffeListChanged"));
      });
    }

    return valueToSave;
  } catch (error) {
    console.error("Error saving coffee backup and return values:", error);
  }
}

export function saveOrderFinished(order: orderResquetfinishProps) {
  try {
    localStorage.setItem("currentOrder", JSON.stringify(order));

    requestAnimationFrame(() => {
      window.dispatchEvent(new Event("changeOrder"));
    });
  } catch (error) {
    console.error("Error saving order finished backup:", error);
  }
}

export function toObtainOrderAndReturnValues() {
  try {
    const currentListCoffeSave = localStorage.getItem("currentListOfCoffe");
    const listOfResultsOfCoffe: listAllInforOfOrderProps = currentListCoffeSave
      ? JSON.parse(currentListCoffeSave)
      : {
          CoffeesInTheCart: [],
          valueTotalOfAllPayment: "",
          valueTotalOfAllItensSome: "",
          valueTotalOfAllDeliveryValue: "",
        };

    return listOfResultsOfCoffe;
  } catch (error) {
    console.error("Error to obtain backup of order and return values:", error);

    const resultDefaultOfOrder: listAllInforOfOrderProps = {
      CoffeesInTheCart: [],
      valueTotalOfAllPayment: "",
      valueTotalOfAllItensSome: "",
      valueTotalOfAllDeliveryValue: "",
    };
    return resultDefaultOfOrder;
  }
}

export function toObtainFinalRequestedValues() {
  try {
    const requestSave = localStorage.getItem("currentOrder");
    const resultsOfRequest: orderResquetfinishProps = requestSave
      ? JSON.parse(requestSave)
      : {
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
        };

    return resultsOfRequest;
  } catch (error) {
    console.error("Error to obtain request conclued and return value:", error);

    const resultDefautlRequestedConclued: orderResquetfinishProps = {
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
    };

    return resultDefautlRequestedConclued;
  }
}
