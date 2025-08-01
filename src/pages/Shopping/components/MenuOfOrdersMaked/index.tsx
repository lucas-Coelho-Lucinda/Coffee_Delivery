import NoMoreOrders from "../NoMoreOrders";

import ListOfOrders from "../ListOfOrders";

import { ValuesOfOrder } from "../ValuesOfOrder";

import { MenuOfOrdersMakedProps } from "../../types";

import { useCallback, useContext, useEffect, useState } from "react";

import { totalCalculeOrder } from "../../../../context/types";

import { toObtainOrderAndReturnValues } from "../../../../Backup";

import { CoffesAddedToCartContext } from "../../../../context/coffesAddedContext";

import {
  ShoppingTitleRequested,
  GuidanceShoppingListOfCoffes,
} from "../../sytle";

export const MenuOfOrdersMaked = ({
  disableFormOptionAndResetForm,
}: MenuOfOrdersMakedProps) => {
  const { coffesAndPaymentCurrent } = useContext(CoffesAddedToCartContext);

  const resultsOrOrderCurrent = toObtainOrderAndReturnValues();

  const stillHaveCoffeToBuy =
    coffesAndPaymentCurrent.CoffeesInTheCart.length > 0 ? true : false;

  const [allValuesOfPayment, seAllValuesOfPayment] =
    useState<totalCalculeOrder>({
      valueTotalOfAllPayment: resultsOrOrderCurrent.valueTotalOfAllPayment,
      valueTotalOfAllItensSome: resultsOrOrderCurrent.valueTotalOfAllItensSome,
      valueTotalOfAllDeliveryValue:
        resultsOrOrderCurrent.valueTotalOfAllDeliveryValue,
    });

  const salveCurrentPaymentOfOrder = useCallback(
    (payment: totalCalculeOrder) => {
      seAllValuesOfPayment(payment);
    },
    []
  );

  useEffect(() => {
    if (resultsOrOrderCurrent?.CoffeesInTheCart.length === 0) {
      disableFormOptionAndResetForm(true);
    }
  }, [
    resultsOrOrderCurrent?.CoffeesInTheCart.length,
    disableFormOptionAndResetForm,
  ]);
  return (
    <>
      <ShoppingTitleRequested>Cafés selecionados</ShoppingTitleRequested>
      <GuidanceShoppingListOfCoffes>
        {stillHaveCoffeToBuy ? (
          <>
            <ListOfOrders
              coffes={coffesAndPaymentCurrent}
              salveCurrentPaymentOfOrder={salveCurrentPaymentOfOrder}
            />
            <ValuesOfOrder {...allValuesOfPayment} />
          </>
        ) : (
          <NoMoreOrders />
        )}
      </GuidanceShoppingListOfCoffes>
    </>
  );
};
