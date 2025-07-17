import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";
import {
  ShoppingCards,
  ShoppingSubText,
  FormAndresInput,
  GuidanceShopping,
  FormButtonPayment,
  ShoppingTitleRequested,
  GuidanceShoppingAndress,
  GuidanceShoppingListOfCoffes,
  GuidanceShoppingAndressTitle,
  GuidanceShoppingFinancialOperation,
  GuidanceShoppingAdressForm,
  GuidanceShoppingPaymentForm,
  OrderListOfCoffesToSell,
  PaymentTotalizersTitle,
  PaymentTotalizersResults,
  OrderListOfPaymentTotalizersTitle,
  OrderListOfPaymentResultsTitle,
  ButtonFinalizeOrder,
  MessageFormWarning,
  WarningMessageDiv,
} from "./sytle";
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { defaultTheme } from "../../../sytles/themes/default";
import { buttonForm, FormOrderSend } from "../../Types/coffe";
import Pagination from "../../components/Pagination";
import NoMoreOrders from "./components/NoMoreOrders";
import registerOrder from "./zod/shopping.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Shopping() {
  const navigate = useNavigate();
  const {
    listCoffeesInTheCart,
    totalOfValueCoffe,
    setOrderResquetfinish,
    addedSelectedCoffeesToCart,
  } = useContext(CoffesAddedToCartContext);

  const [totalData, setTotalData] = useState(totalOfValueCoffe);

  const newCycleForm = useForm<FormOrderSend>({
    resolver: zodResolver(registerOrder),
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = newCycleForm;
  const optionsOfPayments = [
    {
      id: uuidv4(),
      selected: false,
      form: "CARTÃO DE CRÉDITO",
      incone: <CreditCard size={24} color={defaultTheme["purple-300"]} />,
    },
    {
      id: uuidv4(),
      selected: false,
      form: "CARTÃO DE DÉBITO",
      incone: <Bank size={24} color={defaultTheme["purple-300"]} />,
    },
    {
      id: uuidv4(),
      selected: false,
      form: "DINHEIRO",
      incone: <Money size={24} color={defaultTheme["purple-300"]} />,
    },
  ];
  const [listOfButtonPayment, setlistOfButtonPayment] =
    useState<buttonForm[]>(optionsOfPayments);

  function formSeletedPayment(id: string) {
    setlistOfButtonPayment((prev: buttonForm[]) => {
      const option = prev.filter((element) => {
        if (element?.id == id && element?.selected != true) {
          setValue("modo_pagamento", element.form);
          element.selected = true;
          return element;
        }
        if (element?.id != id) {
          element.selected = false;
          return element;
        }

        return element;
      });

      return option;
    });
  }

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
    //window.location.replace("/Request");
  };

  return (
    <>
      <GuidanceShopping onSubmit={handleSubmit(confirmOrder)}>
        <ShoppingCards>
          <ShoppingTitleRequested>Complete seu pedido</ShoppingTitleRequested>
          <GuidanceShoppingAndress
            disabled={listCoffeesInTheCart.length <= 0 ? true : false}
          >
            <GuidanceShoppingAndressTitle>
              <MapPinLine size={24} color={defaultTheme["yellow-300"]} />
              {/* <SubTitle text="Endereço de Entrega" /> */}
              <ShoppingSubText>
                Informe o endereço onde deseja receber seu pedido
              </ShoppingSubText>
            </GuidanceShoppingAndressTitle>
            <GuidanceShoppingAdressForm>
              <WarningMessageDiv>
                <Controller
                  name="cep"
                  control={newCycleForm.control}
                  render={() => (
                    <FormAndresInput
                      maxLength={9}
                      type="text"
                      {...register("cep")}
                      placeholder="CEP"
                      size={"200px"}
                    />
                  )}
                />
                {errors.cep && (
                  <MessageFormWarning position={false}>
                    {errors.cep.message}
                  </MessageFormWarning>
                )}
              </WarningMessageDiv>
            </GuidanceShoppingAdressForm>
            <GuidanceShoppingAdressForm>
              <WarningMessageDiv>
                <Controller
                  name="rua"
                  control={newCycleForm.control}
                  render={() => (
                    <FormAndresInput
                      type="text"
                      {...register("rua")}
                      placeholder="Rua"
                      size={"538px"}
                    />
                  )}
                />
                {errors.rua && (
                  <MessageFormWarning position={false}>
                    {errors.rua.message}
                  </MessageFormWarning>
                )}
              </WarningMessageDiv>
            </GuidanceShoppingAdressForm>
            <GuidanceShoppingAdressForm>
              <WarningMessageDiv>
                <Controller
                  name="numero"
                  control={newCycleForm.control}
                  render={() => (
                    <FormAndresInput
                      maxLength={5}
                      type="text"
                      {...register("numero")}
                      placeholder="Número"
                      size={"200px"}
                    />
                  )}
                />
                {errors.numero && (
                  <MessageFormWarning position={false}>
                    {errors.numero.message}
                  </MessageFormWarning>
                )}
              </WarningMessageDiv>

              <Controller
                name="complemento"
                control={newCycleForm.control}
                render={() => (
                  <FormAndresInput
                    type="text"
                    {...register("complemento")}
                    placeholder="Complemento"
                    size={"348px"}
                  />
                )}
              />
            </GuidanceShoppingAdressForm>
            <GuidanceShoppingAdressForm>
              <WarningMessageDiv>
                <Controller
                  name="bairro"
                  control={newCycleForm.control}
                  render={() => (
                    <FormAndresInput
                      type="text"
                      {...register("bairro")}
                      placeholder="Bairro"
                      size={"348px"}
                    />
                  )}
                />
                {errors.bairro && (
                  <MessageFormWarning position={false}>
                    {errors.bairro.message}
                  </MessageFormWarning>
                )}
              </WarningMessageDiv>

              <WarningMessageDiv>
                <Controller
                  name="cidade"
                  control={newCycleForm.control}
                  render={() => (
                    <FormAndresInput
                      type="text"
                      {...register("cidade")}
                      placeholder="Cidade"
                      size={"360px"}
                    />
                  )}
                />
                {errors.cidade && (
                  <MessageFormWarning position={false}>
                    {errors.cidade.message}
                  </MessageFormWarning>
                )}
              </WarningMessageDiv>

              <WarningMessageDiv>
                <Controller
                  name="UF"
                  control={newCycleForm.control}
                  render={() => (
                    <FormAndresInput
                      maxLength={2}
                      type="text"
                      {...register("UF")}
                      placeholder="UF"
                      size={"20px"}
                      onChange={(e) =>
                        setValue("UF", e.target.value.toUpperCase())
                      }
                    />
                  )}
                />
                {errors.UF && (
                  <MessageFormWarning position={false}>
                    {errors.UF.message}
                  </MessageFormWarning>
                )}
              </WarningMessageDiv>
            </GuidanceShoppingAdressForm>
          </GuidanceShoppingAndress>
          <GuidanceShoppingFinancialOperation
            disabled={listCoffeesInTheCart.length <= 0 ? true : false}
          >
            <GuidanceShoppingAndressTitle>
              <CurrencyDollarSimple
                size={24}
                color={defaultTheme["purple-300"]}
              />
              {/* <SubTitle text="Pagamento" /> */}
              <ShoppingSubText>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </ShoppingSubText>
            </GuidanceShoppingAndressTitle>
            <GuidanceShoppingPaymentForm>
              {listOfButtonPayment.map((Element) => {
                return (
                  <FormButtonPayment
                    type="button"
                    key={Element?.form}
                    selected={Element?.selected}
                    onClick={() => formSeletedPayment(Element?.id)}
                  >
                    {Element?.incone}

                    {Element?.form}
                  </FormButtonPayment>
                );
              })}
            </GuidanceShoppingPaymentForm>
            {errors.modo_pagamento && (
              <MessageFormWarning position={true}>
                {errors.modo_pagamento.message}
              </MessageFormWarning>
            )}
          </GuidanceShoppingFinancialOperation>
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
