import React, { useContext } from "react";
import {
  ButtonFinalizeOrder,
  PaymentTotalizersTitle,
  OrderListOfCoffesToSell,
  PaymentTotalizersResults,
  OrderListOfPaymentResultsTitle,
  OrderListOfPaymentTotalizersTitle,
} from "../../sytle";
import { CoffesAddedToCartContext } from "../../../../context/coffesAddedToCart";

export const ValuesOfOrder = React.memo(() => {
  const { lisItensOfOrder } = useContext(CoffesAddedToCartContext);

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
            {lisItensOfOrder?.valueTotalOfAllItensSome}
          </PaymentTotalizersResults>
          <PaymentTotalizersResults>
            {lisItensOfOrder?.valueTotalOfAllDeliveryValue}
          </PaymentTotalizersResults>
          <PaymentTotalizersResults>
            {lisItensOfOrder?.valueTotalOfAllPayment}
          </PaymentTotalizersResults>
        </OrderListOfPaymentResultsTitle>
      </OrderListOfCoffesToSell>
      <ButtonFinalizeOrder type="submit">CONFIRMAR PEDIDO</ButtonFinalizeOrder>
    </>
  );
});
