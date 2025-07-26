import { useContext } from "react";
import { CoffesAddedToCartContext } from "../../../context/coffesAddedToCart";
import {
  CafeShoppingCart,
  Countekindness,
  DivCount,
  DivShoppingCart,
} from "../style";
import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { defaultTheme } from "../../../../sytles/themes/default";

export const ShoppingButton = () => {
  const { lisItensOfOrder } = useContext(CoffesAddedToCartContext);
  return (
    <CafeShoppingCart>
      {lisItensOfOrder.CoffeesInTheCart?.length > 0 && (
        <DivCount>
          <Countekindness>
            {lisItensOfOrder.CoffeesInTheCart?.length}
          </Countekindness>
        </DivCount>
      )}

      <DivShoppingCart>
        {lisItensOfOrder.CoffeesInTheCart?.length > 0 ? (
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
