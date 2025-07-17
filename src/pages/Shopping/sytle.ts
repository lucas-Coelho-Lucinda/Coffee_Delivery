import styled from "styled-components";
import { GuidanceShoppingAndressProps } from "./types";

export const GuidanceShopping = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin: 8%;
`;

interface propsMessageFormWarning {
  position: boolean;
}

export const MessageFormWarning = styled.div<propsMessageFormWarning>`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["yellow-300"]};
  padding: 0px;
  margin: 0px;
  width: fit-content;

  ${(props) =>
    props.position
      ? `
     font-size: 18px;
     position: relative;
     top: -10px;
     left: 240px;
    `
      : ""}
`;

export const ShoppingCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
`;

export const ShoppingTitleRequested = styled.h1`
  font-size: 20px;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["gray-1000"]};
`;



export const GuidanceShoppingAndress = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "disabled",
})<GuidanceShoppingAndressProps>`
  display: flex;
  gap: 15px;
  padding: 40px;
  border-radius: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme["gray-200"]};
  pointer-events: ${(props) => (props.thisFormCanBeEnabled ? "none" : "auto")};
  ${(props) =>
    props.thisFormCanBeEnabled
      ? `
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    opacity: 0.7;
    `: ""}
`;

export const GuidanceShoppingAdressForm = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  //margin-top: 5px;
`;

export const WarningMessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
export const GuidanceShoppingPaymentForm = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //max-width: 640px;
  margin: 20px 40px;
`;

interface FormAndresProps {
  size: string;
}

export const FormAndresInput = styled.input<FormAndresProps>`
  outline: 1px solid ${(props) => props.theme["gray-600"]};
  background-color: ${(props) => props.theme["gray-300"]};
  padding: 10px;
  border: 10px;
  border-radius: 2px;
  width: ${(props) => props.size};
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["gray-1000"]};
  &:focus {
    outline: 1px solid ${(props) => props.theme["yellow-300"]};
  }
  ::-webkit-input-placeholder {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const FormAndresSelect = styled.select<FormAndresProps>`
  outline: 1px solid ${(props) => props.theme["gray-600"]};
  background-color: ${(props) => props.theme["gray-300"]};
  padding: 10px;
  border: 10px;
  border-radius: 2px;
  width: ${(props) => props.size};
  &:focus {
    outline: 1px solid ${(props) => props.theme["yellow-300"]};
  }
  ::-webkit-input-placeholder {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  //width: 200px;
`;
interface PropsInput {
  size: string;
}
export const Input = styled.input<PropsInput>`
  width: ${(props) => props.size};
  padding: 10px;
  border: 1px solid ${(props) => props.theme["gray-600"]};
  border-radius: 2px;
  outline: 1px solid ${(props) => props.theme["gray-600"]};
  background-color: ${(props) => props.theme["gray-300"]};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme["yellow-300"]};
  }
`;

export const Dropdown = styled.ul<{ isOpen: boolean }>`
  position: relative;
  top: 100%;
  width: 100%;
  color: ${(props) => props.theme["purple-300"]};
  background: ${(props) => props.theme["white"]};
  list-style: none;
  margin: 4px 0 0 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow-y: auto;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

export const OptionItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["purple-100"]};
  }
`;

interface FormButtonPaymenProps {
  selected: boolean;
}

export const FormButtonPayment = styled.button<FormButtonPaymenProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  outline: 1px solid ${(props) => props.theme["gray-600"]};
  background-color: ${(props) => props.theme["gray-400"]};
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["gray-900"]};
  padding: 16px;
  border: 10px;
  border-radius: 2px;
  margin: 32px 0px;
  width: 200px;

  ${(props) =>
    props.selected == true &&
    `
    outline: 1px solid #8047F8;
    background-color: #EBE5F9;
  `}
  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonAddAmountPlus = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: ${(props) => props.theme["purple-300"]};
  background: transparent;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
    background: ${(props) => props.theme["gray-500"]};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const TextAddAmount = styled.span`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["gray-1000"]};
`;

export const TextValueOfCoffeToPay = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  margin-left: 5px;
  color: ${(props) => props.theme["gray-800"]};
`;

export const GuidanceShoppingAndressTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  gap: 10px;
`;

export const ShoppingSubText = styled.p`
  margin-left: 35px;
  background-color: ${(props) => props.theme["gray-200"]};
`;

interface GuidanceShoppingFinancialOperationProps {
  disabled: boolean;
}

export const GuidanceShoppingFinancialOperation = styled.div<GuidanceShoppingFinancialOperationProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-200"]};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  ${(props) =>
    props.disabled
      ? `
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
     opacity: 0.7;

    `
      : ""}
`;

export const GuidanceShoppingListOfCoffes = styled.div`
  display: flex;
  flex-direction: column;
  width: 37rem;
  gap: 0px;
  padding: 10px;
  border-radius: 0px 50px 0px 50px;
  background-color: ${(props) => props.theme["gray-200"]};
`;

export const OrderListOfCoffesToSell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  padding: 0px 40px;
  margin-top: 10px;
`;
export const OrderListOfPaymentTotalizersTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const OrderListOfPaymentResultsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
`;

export const DescriptionOfCoffe = styled.p`
  font-size: 18px;
  font-family: "Baloo 2", sans-serif;
`;

export const DescriptionValueFolder = styled.p`
  font-family: "Baloo 2", sans-serif;
`;

export const DeliveryValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: fit-content;
  height: 0.5rem;
  padding: 0.35rem;
  border-radius: 8px;
  font-family: "Baloo 2", sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme["purple-500"]};
  background-color: ${(props) => props.theme["purple-100"]};
`;

export const GuidanceButtonsOptionValues = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const DeffaulValueToPay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 0.35rem;
  border-radius: 8px;
  width: fit-content;
  height: 18px;
  overflow: hidden; /* Impede que o conteúdo ultrapasse os limites */
  box-sizing: border-box;
  font-family: "Baloo 2", sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme["yellow-300"]};
  background-color: ${(props) => props.theme["yellow-100"]};
`;

export const CarButtonAddOrRemoveAmount = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  height: 1.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 15px;
  background-color: ${(props) => props.theme["gray-400"]};
`;

export const ButtonAddAmountNegative = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  color: ${(props) => props.theme["purple-300"]};
  background: transparent;
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
    background: ${(props) => props.theme["gray-500"]};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const RemoveShopping = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  border-radius: 5px;
  padding: 0.5rem;
  height: 1.5rem;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme["gray-400"]};

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    outline: 1px solid ${(props) => props.theme["purple-300"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple-100"]};
  }
`;

export const OrderDescritionOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const OrderOptionCoffesToBuy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  margin: 40px;
`;

export const LineSepareitor = styled.div`
  position: relative;
  left: 5%;
  width: 90%;
  border: 1px solid ${(props) => props.theme["gray-400"]};
`;

export const CardImageOptionsCoffesToSell = styled.div`
  img {
    width: 5rem;
    height: 5rem;
    box-sizing: initial;
  }
`;

export const PaymentTotalizersTitle = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-size: 18px;
  color: ${(props) => props.theme["gray-1000"]};
  &:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: bolder;
    color: ${(props) => props.theme["gray-1000"]};
  }
`;

export const PaymentTotalizersResults = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-size: 18px;
  color: ${(props) => props.theme["gray-1000"]};

  &:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: bolder;
  }
`;

export const TitlePageAntCountOrders = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-size: 17px;
  color: ${(props) => props.theme["gray-1000"]};
`;

export const ItensValuesOfOrders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const ButtonFinalizeOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme["yellow-200"]};
  color: ${(props) => props.theme["white"]};
  padding: 0.7rem;
  border: none;
  border-radius: 8px;

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background-color: ${(props) => props.theme["yellow-300"]};
  }
`;

export const LayoutRetornMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const TitleToWarningGobackMenu = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: center;
  width: 300px;
`;

export const ButtonGoBackOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme["yellow-200"]};
  color: ${(props) => props.theme["white"]};
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
