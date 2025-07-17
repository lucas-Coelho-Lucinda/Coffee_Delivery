import styled from "styled-components";
import {
  propsPriceContainerOnCoffee,
  propsIconBottom,
  OptionOfMenuProps,
} from "../Default/types";

export const CardDefaulLayout = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  gap: 17rem;
  margin: 8% 5%;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 48px;
  color: ${(props) => props.theme["gray-1000"]};
`;

export const SubTitle = styled.p`
  font-family: "Roboto", sans-serif;
  word-break: break-word;
  overflow-wrap: break-word;
  color: ${(props) => props.theme["gray-900"]};
`;

export const CardDefaultBackGround = styled.div`
  position: absolute;
  top: 10;
  right: 0;
  width: 100%;
  height: 50%;
  opacity: 0.5;
  background-image: radial-gradient(
    circle,
    ${(props) => props.theme["FFFFFF"]}
  );
  filter: blur(10px);
`;

export const PlatformDescriptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30rem;
  gap: 1.25rem;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.313rem;
`;

export const IconBottom = styled.div<propsIconBottom>`
  width: fit-content;
  height: 15px;
  border-radius: 15px;
  padding: 0.375rem;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.color};
`;

export const CardTitleAnSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35rem;
  gap: 2rem;
`;

export const CardImageStartOfPage = styled.div`
  box-sizing: initial;
`;

export const CardTitleOfOptionsCoffesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 4rem 7rem;
`;

export const TitleOfOptions = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 30px;
  color: ${(props) => props.theme["gray-1000"]};
`;
export const CardMenuForSell = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6rem;
  margin: 1rem 10rem;
`;

export const OptionOfMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "optionSelected",
})<OptionOfMenuProps>`
  position: relative;
  width: 17rem;
  padding: 1rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  border-radius: 8px 40px 8px 40px;
  background-color: ${(props) => props.theme["gray-200"]};
  opacity: ${(props) => (props.optionSelected ? 0.6 : 1)};
  pointer-events: ${(props) => (props.optionSelected ? "none" : "auto")};
  flex-shrink: 0;
  transition: all 0.3s ease;

  &::after {
    font-family: "Roboto Condensed", sans-serif;
    content: ${(props) => (props.optionSelected ? "'Café reservado'" : "''")};
    position: absolute;
    top: 16%;
    left: 83%;
    transform: translate(-50%, -50%) rotate(-0deg);
    padding: 0.1rem;
    font-size: 1rem;
    border: ${(props) => (props.optionSelected ? "solid 2px #4B2995" : "none")};
    border-radius: 8px 0px 8px 8px;
    background-color: ${(props) => props.theme["purple-100"]};
    color: ${(props) => props.theme["purple-500"]};
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
  }
`;
export const CardImageOfCoffeToSell = styled.div`
  position: absolute;
  top: 6%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TypeCoffeeOffer = styled.h6`
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 20px;
  font-family: "Roboto Condensed", sans-serif;
  background-color: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-300"]};
`;

export const TypeCoffee = styled.h6`
  position: absolute;
  top: 62%;
  left: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 20px;
  font-family: "Roboto Condensed", sans-serif;
  background-color: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-300"]};
`;

export const CardOfDeffaultValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: "Roboto Condensed", sans-serif;
`;

export const CardTransactionsCoffee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const ValueOfCoffeCurrent = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
  font-size: 25px;
`;

export const PriceContainerOnCoffee = styled.h6.withConfig({
  shouldForwardProp: (prop) => prop !== 'background' && prop !== 'color',
})<propsPriceContainerOnCoffee>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0.4rem;
  font-size: 0.9rem;
  border-radius: 20px;
  width: 250px;
  font-family: "Roboto Condensed", sans-serif;
  color: ${(props) => props.theme[props.color]};
  background-color: ${(props) => props.theme[props.background]};
`;

export const TextDescriptionOfDevaultValue = styled.p`
  font-size: 0.9rem;
  font-family: "Roboto Condensed", sans-serif;
`;

export const TitleCoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.313rem;
`;

export const TitleCoffee = styled.h3`
  /* position: absolute;
  top: 25%; */
  font-family: "Baloo 2", sans-serif;
`;

export const SubTitleCoffee = styled.span`
  /*  position: absolute;
  top: 33%; */
  font-family: "Roboto", sans-serif;
  text-align: center;
  max-width: 16.875rem;
`;

export const DeliveryValue = styled.div`
  position: absolute;
  top: -50%;
  left: 18%;
  transform: translate(-50%, -50%); /* Centraliza */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 0.5rem;
  padding: 0.6rem;
  border-radius: 8px;
  max-width: 100px;
  height: 18px;
  overflow: hidden; /* Impede que o conteúdo ultrapasse os limites */
  box-sizing: border-box;
  font-family: "Baloo 2", sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme["yellow-300"]};
  background-color: ${(props) => props.theme["yellow-100"]};
`;

export const GuidanceValues = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RealSignDelivery = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
`;

export const RealSign = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

export const OrderButtonPositioningCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const CarButtonAddOrRemoveAmount = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  height: 1.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-400"]};
`;

export const TextAddAmount = styled.span`
  width: fit-content;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["gray-1000"]};
`;

export const ButtonAddAmountPlus = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: ${(props) => props.theme["purple-300"]};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  width: fit-content;
  border-radius: 5px;
  &:active {
    transform: scale(0.95);
    background: ${(props) => props.theme["gray-500"]};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

    .TextAddAmount {
      color: "red";
    }
  }
`;
export const ButtonAddAmountNegative = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: ${(props) => props.theme["purple-300"]};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  width: fit-content;
  border-radius: 5px;
  &:active {
    transform: scale(0.95);
    background: ${(props) => props.theme["gray-500"]};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonAddShopping = styled.div`
  border-radius: 5px;
  text-align: center;
  padding: 0.5rem;
  width: 1%.5;
  height: 1.5rem;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["purple-500"]};

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
