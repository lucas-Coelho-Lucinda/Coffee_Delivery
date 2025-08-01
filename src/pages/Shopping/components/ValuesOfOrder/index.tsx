import React from "react";
import {
  ButtonFinalizeOrder,
  PaymentTotalizersTitle,
  OrderListOfCoffesToSell,
  PaymentTotalizersResults,
  OrderListOfPaymentResultsTitle,
  OrderListOfPaymentTotalizersTitle,
} from "../../sytle";
import { totalCalculeOrder } from "../../../../context/types";


export const ValuesOfOrder = React.memo(
  ({
    valueTotalOfAllDeliveryValue,
    valueTotalOfAllItensSome,
    valueTotalOfAllPayment,
  }: totalCalculeOrder) => {
    return (
      <>
        <OrderListOfCoffesToSell>
          <OrderListOfPaymentTotalizersTitle>
            <PaymentTotalizersTitle>Valor itens:</PaymentTotalizersTitle>
            <PaymentTotalizersTitle>Valor Frete:</PaymentTotalizersTitle>
            <PaymentTotalizersTitle>Total do pedido:</PaymentTotalizersTitle>
          </OrderListOfPaymentTotalizersTitle>
          <OrderListOfPaymentResultsTitle>
            <PaymentTotalizersResults>
              {valueTotalOfAllItensSome}
            </PaymentTotalizersResults>
            <PaymentTotalizersResults>
              {valueTotalOfAllDeliveryValue}
            </PaymentTotalizersResults>
            <PaymentTotalizersResults>
              {valueTotalOfAllPayment}
            </PaymentTotalizersResults>
          </OrderListOfPaymentResultsTitle>
        </OrderListOfCoffesToSell>
        <ButtonFinalizeOrder type="submit">
          CONFIRMAR PEDIDO
        </ButtonFinalizeOrder>
      </>
    );
  }
);
