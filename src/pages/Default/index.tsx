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
      if (!coffesAndPaymentCurrent.CoffeesInTheCart) return ListOfcoffes;

      const newList = ListOfcoffes.map((coffe) => {
        const matchingCoffees = coffesAndPaymentCurrent.CoffeesInTheCart.filter(
          (select) => select.title === coffe.title
        );

        const coffeSaveAsSelected =
          matchingCoffees.find((c) => c.is_selected) ?? matchingCoffees[0];

        return coffeSaveAsSelected ?? coffe;
      });
      return newList.sort((a, b) => Number(b.is_selected) - Number(a.is_selected));
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
