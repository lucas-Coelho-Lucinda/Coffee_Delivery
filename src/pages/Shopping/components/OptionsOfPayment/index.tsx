import { buttonForm, PropsOptionsOfPayment } from "../../types";
import { defaultTheme } from "../../../../../sytles/themes/default";
import { CurrencyDollarSimple } from "@phosphor-icons/react/dist/ssr";
import {
  FormButtonPayment,
  GuidanceShoppingAndressTitle,
  GuidanceShoppingFinancialOperation,
  GuidanceShoppingPaymentForm,
  MessageFormWarning,
  ShoppingSubText,
} from "../../sytle";
import React, { useState } from "react";

export const OptionsOfPayment = React.memo(
  ({
    errors,
    setValue,
    formEnabled,
    availableOperations,
  }: PropsOptionsOfPayment) => {
    const [options, setOptions] = useState<buttonForm[]>(availableOperations);

    const selectePayment = (payment: buttonForm) => {
      setValue("modo_pagamento", payment.form);
      setOptions((prevOptions) =>
        prevOptions.map((register) => ({
          ...register,
          selected: register.form === payment.form ? true : false,
        }))
      );
    };

    return (
      <>
        <GuidanceShoppingFinancialOperation disabled={formEnabled}>
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
            {options.map((Element) => {
              return (
                <FormButtonPayment
                  type="button"
                  key={Element?.form}
                  selected={Element?.selected}
                  onClick={() => selectePayment(Element)}
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
      </>
    );
  }
);
