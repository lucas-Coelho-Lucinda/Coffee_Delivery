import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import { defaultTheme } from "../../../../sytles/themes/default";
import { CoffesAddedToCartContext } from "../../../context/coffesAddedContext";
import {
  CafeShoppingCart,
  Countekindness,
  DivCount,
  DivShoppingCart,
} from "../style";

export const ShoppingButton = () => {
  const { coffesAndPaymentCurrent } = useContext(CoffesAddedToCartContext);

  const stillHavaCoffesToBuy =
    coffesAndPaymentCurrent?.CoffeesInTheCart?.length > 0 ? true : false;

  return (
    <CafeShoppingCart>
      {stillHavaCoffesToBuy && (
        <DivCount>
          <Countekindness>
            {coffesAndPaymentCurrent?.CoffeesInTheCart.length}
          </Countekindness>
        </DivCount>
      )}

      <DivShoppingCart>
        {stillHavaCoffesToBuy ? (
          <NavLink to={"/Shopping"}>
            <ShoppingCart
              size={24}
              weight="fill"
              color={defaultTheme["yellow-300"]}
            />
          </NavLink>
        ) : (
          <ShoppingCart
            size={24}
            weight="fill"
            color={defaultTheme["yellow-300"]}
          />
        )}
      </DivShoppingCart>
    </CafeShoppingCart>
  );
};
