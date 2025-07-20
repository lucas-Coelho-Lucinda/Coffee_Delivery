import { CoffeList } from "../../Types/coffe";

import CoffeIntro from "./components/CoffeIntro";
import { CoffeeListToSell } from "./components/CoffeeListToSell";

import { listDefaultItensToSell } from "./listDefaultItensToSell";

import { useCallback, useContext, useEffect, useState } from "react";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";

import {
  CalculateValuesOfCoffeForItem,
  CalculateValuesDeliveryOfCoffeForItem,
} from "../../Operations";

import {
  TitleOfOptions,
  CardMenuForSell,
  CardTitleOfOptionsCoffesList,
} from "./sytle";


function LagoutDefault() {
  const [coffesListState, setCoffesList] = useState<CoffeList[]>(
    listDefaultItensToSell
  );

  const { addedSelectedCoffeesToCart, listCoffeesInTheCart } = useContext(
    CoffesAddedToCartContext
  );

  useEffect(() => {
    try {
      if (listCoffeesInTheCart.length > 0) {
        setCoffesList((ListOfcoffes) => {
          return ListOfcoffes.map((coffe) => {
            const isThisCoffeAddToOrder = listCoffeesInTheCart.find(
              (coffeMarkAsSelected) => coffeMarkAsSelected.id === coffe.id
            );
            return isThisCoffeAddToOrder ? isThisCoffeAddToOrder : coffe;
          });
        });
      }
    } catch (error) {
      console.log(
        "Error when trying to update list of coffees added to purchase: ",
        error
      );
    }
  }, [listCoffeesInTheCart]);

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
          addedSelectedCoffeesToCart(
            litsOfcoffeMarkAsSelected,
            litsOfcoffeMarkAsSelected.length
          );
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
          const newList = ListOfcoffes.map((item) => {
            if (item.id !== idCoffeSelected) return item;

            let newAmount = increase ? item.amount + 1 : item.amount - 1;
            if (newAmount <= 0) newAmount = 1;

            return {
              ...item,
              amount: newAmount,
              value: CalculateValuesOfCoffeForItem(
                { ...item, amount: newAmount },
                true
              ),
              deliveryValue: CalculateValuesDeliveryOfCoffeForItem(
                { ...item, amount: newAmount },
                true
              ),
            };
          });

          return newList;
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
      <CardTitleOfOptionsCoffesList>
        <TitleOfOptions>Nossos Cafés</TitleOfOptions>
      </CardTitleOfOptionsCoffesList>
      <CardMenuForSell>
        {coffesListState.map((coffe) => {
          return (
            <CoffeeListToSell
              key={coffe.id}
              coffe={coffe}
              onAdd={addCoffeeToPurchaseAndMarkAsSelected}
              onChangeAmount={updateCoffeListItem}
            />
          );
        })}
      </CardMenuForSell>
    </>
  );
}

export default LagoutDefault;
