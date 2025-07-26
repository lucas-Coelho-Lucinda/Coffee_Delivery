import React from "react";
import { Trash } from "@phosphor-icons/react";
import { defaultTheme } from "../../../../../../../sytles/themes/default";
import {
  OrderOptionCoffesToBuy,
  CardImageOptionsCoffesToSell,
  OrderDescritionOption,
  DescriptionOfCoffe,
  GuidanceButtonsOptionValues,
  CarButtonAddOrRemoveAmount,
  ButtonAddAmountNegative,
  TextAddAmount,
  ButtonAddAmountPlus,
  RemoveShopping,
  ItensValuesOfOrders,
  DeffaulValueToPay,
  ValueCurrentOfCoffeToPay,
  LineSepareitor,
} from "../../../../sytle";
import { paginationOfOrdersProps } from "../../../../types";

export const PageItemOfOrder = ({
  infoOfPageOrder,
  addNewListCoffeUpdate,
  removeItemofListCoffe,
}: paginationOfOrdersProps) => {
  return (
    <>
      <OrderOptionCoffesToBuy>
        <CardImageOptionsCoffesToSell>
          <img src={infoOfPageOrder?.img} />
        </CardImageOptionsCoffesToSell>
        <OrderDescritionOption>
          <DescriptionOfCoffe>{infoOfPageOrder?.title}</DescriptionOfCoffe>
          <GuidanceButtonsOptionValues>
            <CarButtonAddOrRemoveAmount>
              <ButtonAddAmountNegative
                type="button"
                onClick={() =>
                  addNewListCoffeUpdate(infoOfPageOrder?.id, false)
                }
              >
                -
              </ButtonAddAmountNegative>
              <TextAddAmount>{infoOfPageOrder?.amount}</TextAddAmount>
              <ButtonAddAmountPlus
                type="button"
                onClick={() => addNewListCoffeUpdate(infoOfPageOrder?.id, true)}
              >
                +
              </ButtonAddAmountPlus>
            </CarButtonAddOrRemoveAmount>
            <RemoveShopping
              onClick={() => removeItemofListCoffe(infoOfPageOrder?.id)}
            >
              <Trash size={16} color={defaultTheme["purple-500"]} />
              REMOVER
            </RemoveShopping>
          </GuidanceButtonsOptionValues>
        </OrderDescritionOption>
        <ItensValuesOfOrders>
          <DeffaulValueToPay color="yellow-300" background_color="yellow-100">
            <p>Apartir de:</p>
            {infoOfPageOrder?.valueDefault}
          </DeffaulValueToPay>
          <DeffaulValueToPay color="yellow-300" background_color="yellow-100">
            <p>Frete fixo:</p>
            {infoOfPageOrder?.deliveryValueDefault}
          </DeffaulValueToPay>
          <DeffaulValueToPay color="purple-300" background_color="purple-100">
            <p>Frete atual:</p>
            {infoOfPageOrder?.deliveryValue}
          </DeffaulValueToPay>
          <ValueCurrentOfCoffeToPay>
            {infoOfPageOrder?.value}
          </ValueCurrentOfCoffeToPay>
        </ItensValuesOfOrders>
      </OrderOptionCoffesToBuy>
      <LineSepareitor />
    </>
  );
};
