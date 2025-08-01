import { Trash } from "@phosphor-icons/react";
import { paginationOfOrdersProps } from "../../../../types";
import { defaultTheme } from "../../../../../../../sytles/themes/default";

import {
  TextAddAmount,
  RemoveShopping,
  LineSepareitor,
  DeffaulValueToPay,
  DescriptionOfCoffe,
  ButtonAddAmountPlus,
  ItensValuesOfOrders,
  OrderDescritionOption,
  OrderOptionCoffesToBuy,
  ButtonAddAmountNegative,
  ValueCurrentOfCoffeToPay,
  CarButtonAddOrRemoveAmount,
  GuidanceButtonsOptionValues,
  CardImageOptionsCoffesToSell,
} from "../../../../sytle";

export const PageItemOfOrder = (
  ({
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
                  onClick={() =>
                    addNewListCoffeUpdate(infoOfPageOrder?.id, true)
                  }
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
  }
);
