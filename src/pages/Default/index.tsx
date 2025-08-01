import { CardMenuForSell } from "./sytle";

import { CoffeList } from "../../Types/coffe";

import CoffeIntro from "./components/CoffeIntro";
import { CoffeeListToSell } from "./components/CoffeeListToSell";

import { listDefaultItensToSell } from "./listDefaultItensToSell";

import { updateListOfCoffeToBuy } from "../../Operations";
import { useCallback, useContext, useEffect, useState } from "react";

import { CoffesAddedToCartContext } from "../../context/coffesAddedContext";

function LagoutDefault() {
  const [coffesListState, setCoffesList] = useState<CoffeList[]>(
    listDefaultItensToSell
  );

  const { addedSelectedCoffeesToCart, coffesAndPaymentCurrent } = useContext(
    CoffesAddedToCartContext
  );

  useEffect(() => {
    try {
      setCoffesList((ListOfcoffes) => {
        return ListOfcoffes.map((coffe) => {
          if (!coffesAndPaymentCurrent.CoffeesInTheCart) return coffe;

          const coffeSaveAsSelected =
            coffesAndPaymentCurrent.CoffeesInTheCart.find(
              (select) =>
                select.is_selected == true && coffe.title == select.title
            );

          const optionsOfCoffesCurrent = coffeSaveAsSelected ?? coffe;

          return optionsOfCoffesCurrent;
        });
      });
    } catch (error) {
      console.error(
        "Error when trying to update list of coffees added to purchase:",
        error
      );
    }
  }, [coffesAndPaymentCurrent, coffesAndPaymentCurrent.CoffeesInTheCart]);

  const addCoffeeToPurchaseAndMarkAsSelected = useCallback(
    (idCoffeSelected: string) => {
      try {
        setCoffesList((ListOfcoffes) => {
          const listofAllCoffes = ListOfcoffes.map((coffe) =>
            coffe.id === idCoffeSelected
              ? { ...coffe, is_selected: true }
              : coffe
          );

          const litsOfcoffeMarkAsSelected = listofAllCoffes.filter(
            (coffe) => coffe.is_selected == true
          );
          addedSelectedCoffeesToCart(litsOfcoffeMarkAsSelected);
          return listofAllCoffes;
        });
      } catch (error) {
        console.log(
          "Error on function addCoffeeToPurchaseAndMarkAsSelected: ",
          error
        );
      }
    },
    [addedSelectedCoffeesToCart]
  );

  const updateCoffeListItem = useCallback(
    (idCoffeSelected: string, increase: boolean) => {
      try {
        setCoffesList((ListOfcoffes) => {
          const dados = updateListOfCoffeToBuy(
            ListOfcoffes,
            idCoffeSelected,
            increase
          );

          return dados.CoffeesInTheCart;
        });
      } catch (error) {
        console.log("Error on function updateCoffeListItem: ", error);
      }
    },
    []
  );

  return (
    <>
      <CoffeIntro />
      <CardMenuForSell>
        {coffesListState.map((coffe) => {
          return (
            <CoffeeListToSell
              key={coffe.id}
              coffe={coffe}
              onChangeAmount={updateCoffeListItem}
              onAdd={addCoffeeToPurchaseAndMarkAsSelected}
            />
          );
        })}
      </CardMenuForSell>
    </>
  );
}

export default LagoutDefault;
