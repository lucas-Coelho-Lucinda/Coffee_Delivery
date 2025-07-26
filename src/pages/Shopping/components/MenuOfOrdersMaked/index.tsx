import NoMoreOrders from "../NoMoreOrders";
import ListOfOrders from "../ListOfOrders";
import { ValuesOfOrder } from "../ValuesOfOrder";
import {
  ShoppingTitleRequested,
  GuidanceShoppingListOfCoffes,
} from "../../sytle";
import { CoffesAddedToCartContext } from "../../../../context/coffesAddedToCart";
import { useContext, useEffect } from "react";
import { MenuOfOrdersMakedProps } from "../../types";
export const MenuOfOrdersMaked = ({
  disableFormOptionAndResetForm,
}: MenuOfOrdersMakedProps) => {
  const { lisItensOfOrder } = useContext(CoffesAddedToCartContext);

  useEffect(() => {
    if (lisItensOfOrder?.CoffeesInTheCart.length === 0) {
      disableFormOptionAndResetForm(true);
    }
  }, [lisItensOfOrder?.CoffeesInTheCart]);
  return (
    <>
      <ShoppingTitleRequested>Cafés selecionados</ShoppingTitleRequested>
      <GuidanceShoppingListOfCoffes>
        {lisItensOfOrder.CoffeesInTheCart?.length > 0 ? (
          <>
            <ListOfOrders CoffeList={lisItensOfOrder.CoffeesInTheCart} />
            <ValuesOfOrder />
          </>
        ) : (
          <NoMoreOrders />
        )}
      </GuidanceShoppingListOfCoffes>
    </>
  );
};
