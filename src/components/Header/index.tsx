import Logo from "../../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";
import { defaultTheme } from "../../../sytles/themes/default";
import {
  BackgroundHeader,
  CardInfoHeader,
  CardImge,
  Boxaddress,
  TextNameAndStateAcronym,
} from "./style";
import { ShoppingButton } from "./ShoppingButton";

function Header() {
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
          <ShoppingButton />
        </CardInfoHeader>
      </BackgroundHeader>
      <Outlet />
    </div>
  );
}

export default Header;
