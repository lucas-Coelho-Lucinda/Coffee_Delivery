import { useCallback } from "react";
import { Controller } from "react-hook-form";
import { buttonForm, PropsOptionsOfPayment } from "../../types";

import {
  FormButtonPayment,
  MessageFormWarning,
  GuidanceShoppingPaymentForm,
  GuidanceShoppingFinancialOperation,
} from "../../sytle";

export const OptionsOfPayment = ({
  errors,
  control,
  setOptions,
  formEnabled,
  availableOperations,
}: PropsOptionsOfPayment) => {
  const selectePayment = useCallback(
    (payment: buttonForm) => {
      setOptions((prevOptions) =>
        prevOptions.map((register) => {
          if (register.form === payment.form && register.selected == false) {
            return {
              ...register,
              selected: true,
            };
          }
          return {
            ...register,
            selected: false,
          };
        })
      );
    },
    [setOptions]
  );

  return (
    <Controller
      control={control}
      name="modo_pagamento"
      rules={{ required: true }}
      render={() => (
        <GuidanceShoppingFinancialOperation thisformcanbeenabled={formEnabled}>
          <GuidanceShoppingPaymentForm>
            {availableOperations.map((option) => (
              <FormButtonPayment
                key={option.form}
                selected={option.selected}
                type="button"
                onClick={() => {
                  selectePayment(option);
                }}
              >
                {option.incone}
                {option.form}
              </FormButtonPayment>
            ))}
          </GuidanceShoppingPaymentForm>
          {errors?.modo_pagamento && (
            <MessageFormWarning
              top={"0.625rem"}
              left={"15rem"}
              position={"relative"}
              font_size={"1.125rem"}
              enableControlPosition={true}
            >
              {errors?.modo_pagamento?.message}
            </MessageFormWarning>
          )}
        </GuidanceShoppingFinancialOperation>
      )}
    />
  );
};
