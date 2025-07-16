import { ArrowCircleLeft, Coffee } from "@phosphor-icons/react";
import {
  ButtonGoBackOrder,
  LayoutRetornMenu,
  TitleToWarningGobackMenu,
} from "../../sytle";
import { NavLink } from "react-router-dom";

const NoMoreOrders = () => {
  return (
    <LayoutRetornMenu>
      <Coffee size={48} />
      <TitleToWarningGobackMenu>
        Não encontramos uma escolha... gostaria de voltar e ver os cafés
        novamente?
      </TitleToWarningGobackMenu>
      <NavLink to={"/"}  style={{ textDecoration: "none" }}>
        <ButtonGoBackOrder>
          <ArrowCircleLeft size={18} />
          Retornar
        </ButtonGoBackOrder>
      </NavLink>
    </LayoutRetornMenu>
  );
};

export default NoMoreOrders;
