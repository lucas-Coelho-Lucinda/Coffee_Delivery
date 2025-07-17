import { useContext } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { defaultTheme } from "../../../sytles/themes/default";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";
import {
  BackgroundHeader,
  CardInfoHeader,
  CardImge,
  Boxaddress,
  Boxkindness,
  Countekindness,
  DivCount,
  DivShoppingCart,
  TextNameAndStateAcronym,
} from "./style";

function Header() {
  const { numberOfCoffeesInTheCart } = useContext(CoffesAddedToCartContext);

  return (
    <div>
      <BackgroundHeader>
        <NavLink to={"/"}>
          <CardImge>
            <img src={Logo} alt="logo_do_header" />
          </CardImge>
        </NavLink>
        <CardInfoHeader>
          <Boxaddress>
            <MapPin
              size={24}
              weight="fill"
              color={defaultTheme["purple-300"]}
            />
            <TextNameAndStateAcronym>Porto Alegre, RS</TextNameAndStateAcronym>
          </Boxaddress>
          <Boxkindness>
            {numberOfCoffeesInTheCart > 0 && (
              <DivCount>
                <Countekindness>{numberOfCoffeesInTheCart}</Countekindness>
              </DivCount>
            )}

            <DivShoppingCart>
              {numberOfCoffeesInTheCart > 0 ? (
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
          </Boxkindness>
        </CardInfoHeader>
      </BackgroundHeader>
      <Outlet />
    </div>
  );
}

export default Header;
