import { useEffect, useState } from "react";
import { MenuFormOfPaymentProps } from "../../types";
import { OptionsOfPayment } from "../OptionsOfPayment";
import { optionsOfPayments } from "../../optionsOfPayments";

export const MenuFormOfPayment = ({
  control,
  errors,
  setValue,
  formEnabled,
}: MenuFormOfPaymentProps) => {
  const [options, setOptions] = useState(optionsOfPayments);

  useEffect(() => {
    if (formEnabled) {
      setOptions(optionsOfPayments);
      return;
    }

    const haveOptionSelected = options.findIndex(
      (item) => item.selected == true
    );

    if (haveOptionSelected != -1) {
      setValue("modo_pagamento", optionsOfPayments[haveOptionSelected]?.form);
      return;
    }
    setValue("modo_pagamento", "");
  }, [options, setValue, formEnabled]);
  return (
    <OptionsOfPayment
      errors={errors}
      control={control}
      formEnabled={formEnabled}
      setOptions={setOptions}
      availableOperations={options}
    />
  );
};
