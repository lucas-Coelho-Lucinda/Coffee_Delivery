import React, { useContext } from "react";
import {
  ButtonFinalizeOrder,
  OrderListOfCoffesToSell,
  OrderListOfPaymentResultsTitle,
  OrderListOfPaymentTotalizersTitle,
  PaymentTotalizersResults,
  PaymentTotalizersTitle,
} from "../../sytle";
import { CoffesAddedToCartContext } from "../../../../context/coffesAddedToCart";

export const ValuesOfOrder = React.memo(() => {
  const { totalOfValueCoffe } = useContext(CoffesAddedToCartContext);

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
            {totalOfValueCoffe.valueTotalOfAllPayment}
          </PaymentTotalizersResults>
          <PaymentTotalizersResults>
            {totalOfValueCoffe.valueTotalOfAllItensSome}
          </PaymentTotalizersResults>
          <PaymentTotalizersResults>
            {totalOfValueCoffe.valueTotalOfAllDeliveryValue}
          </PaymentTotalizersResults>
        </OrderListOfPaymentResultsTitle>
      </OrderListOfCoffesToSell>
      <ButtonFinalizeOrder type="submit">CONFIRMAR PEDIDO</ButtonFinalizeOrder>
    </>
  );
});
