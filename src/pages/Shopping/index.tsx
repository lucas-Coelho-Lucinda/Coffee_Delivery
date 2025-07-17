import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import registerOrder from "./zod/shopping.zod";
import { FormOrderSend } from "../../Types/coffe";
import { zodResolver } from "@hookform/resolvers/zod";
import { optionsOfPayments } from "./optionsOfPayments";
import { SubmitHandler, useForm } from "react-hook-form";


import Pagination from "../../components/Pagination";
import NoMoreOrders from "./components/NoMoreOrders";
import { FormResquestOrder } from "./components/FormResquestOrder";
import { OptionsOfPayment } from "./components/OptionsOfPayment";

import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";

import {
  ShoppingCards,
  GuidanceShopping,
  ShoppingTitleRequested,
  GuidanceShoppingListOfCoffes,
  OrderListOfCoffesToSell,
  PaymentTotalizersTitle,
  PaymentTotalizersResults,
  OrderListOfPaymentTotalizersTitle,
  OrderListOfPaymentResultsTitle,
  ButtonFinalizeOrder,
} from "./sytle";

function Shopping() {
  const navigate = useNavigate();
  const {
    listCoffeesInTheCart,
    totalOfValueCoffe,
    setOrderResquetfinish,
    addedSelectedCoffeesToCart,
  } = useContext(CoffesAddedToCartContext);

  const [totalData, setTotalData] = useState(totalOfValueCoffe);

  const enable = listCoffeesInTheCart.length <= 0 ? true : false;

  const newCycleForm = useForm<FormOrderSend>({
    resolver: zodResolver(registerOrder),
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = newCycleForm;

  function refundAllOrder() {
    listCoffeesInTheCart.map((elemento) => {
      elemento.amount = 1;
      elemento.is_selected = false;
      elemento.value = elemento.valueDefault;
      elemento.deliveryValue = elemento.deliveryValueDefault;
      return elemento;
    });
    addedSelectedCoffeesToCart([], 0);
  }

  const confirmOrder: SubmitHandler<FormOrderSend> = (OrderResquest) => {
    setOrderResquetfinish(OrderResquest);
    navigate("/Request", { replace: true });
    refundAllOrder();
  };

  return (
    <>
      <GuidanceShopping onSubmit={handleSubmit(confirmOrder)}>
        <ShoppingCards>
          <FormResquestOrder
            errors={errors}
            setValue={setValue}
            register={register}
            newCycleForm={newCycleForm}
            formEnabled={enable}
          />
          <OptionsOfPayment
            errors={errors}
            setValue={setValue}
            formEnabled={enable}
            availableOperations={optionsOfPayments}
          />
        </ShoppingCards>
        <ShoppingCards>
          <ShoppingTitleRequested>Cafés selecionados</ShoppingTitleRequested>
          <GuidanceShoppingListOfCoffes>
            {listCoffeesInTheCart.length > 0 ? (
              <>
                <Pagination
                  CoffeList={listCoffeesInTheCart}
                  totalOfValueCoffe={setTotalData}
                />
                <OrderListOfCoffesToSell>
                  <OrderListOfPaymentTotalizersTitle>
                    <PaymentTotalizersTitle>
                      Valor itens:
                    </PaymentTotalizersTitle>
                    <PaymentTotalizersTitle>
                      Valor Frete:
                    </PaymentTotalizersTitle>
                    <PaymentTotalizersTitle>
                      Total do pedido:
                    </PaymentTotalizersTitle>
                  </OrderListOfPaymentTotalizersTitle>
                  <OrderListOfPaymentResultsTitle>
                    <PaymentTotalizersResults>
                      {totalData?.valueTotalOfAllItensSome
                        ? totalData?.valueTotalOfAllItensSome
                        : "R$ 00,00"}
                    </PaymentTotalizersResults>
                    <PaymentTotalizersResults>
                      {totalData?.valueTotalOfAllDeliveryValue
                        ? totalData?.valueTotalOfAllDeliveryValue
                        : "R$ 00,00"}
                    </PaymentTotalizersResults>
                    <PaymentTotalizersResults>
                      {totalData?.valueTotalOfAllPayment
                        ? totalData?.valueTotalOfAllPayment
                        : "R$ 00,00"}
                    </PaymentTotalizersResults>
                  </OrderListOfPaymentResultsTitle>
                </OrderListOfCoffesToSell>
                <ButtonFinalizeOrder type="submit">
                  CONFIRMAR PEDIDO
                </ButtonFinalizeOrder>
              </>
            ) : (
              <NoMoreOrders />
            )}
          </GuidanceShoppingListOfCoffes>
        </ShoppingCards>
      </GuidanceShopping>
    </>
  );
}

export default Shopping;
