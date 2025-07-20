import NoMoreOrders from "../NoMoreOrders";
import ListOfOrders from "../ListOfOrders";
import { ValuesOfOrder } from "../ValuesOfOrder";
import { propsMenuOfOrdersMaked } from "../../types";

import {
  GuidanceShoppingListOfCoffes,
  ShoppingTitleRequested,
} from "../../sytle";

export const MenuOfOrdersMaked = ({ coffes }: propsMenuOfOrdersMaked) => {
  return (
    <>
      <ShoppingTitleRequested>Cafés selecionados</ShoppingTitleRequested>
      <GuidanceShoppingListOfCoffes>
        {coffes.length > 0 ? (
          <>
            <ListOfOrders CoffeList={coffes} />
            <ValuesOfOrder />
          </>
        ) : (
          <NoMoreOrders />
        )}
      </GuidanceShoppingListOfCoffes>
    </>
  );
};
