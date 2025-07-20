import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import registerOrder from "./zod/shopping.zod";
import { FormOrderSend } from "../../Types/coffe";
import { zodResolver } from "@hookform/resolvers/zod";
import { optionsOfPayments } from "./optionsOfPayments";
import { SubmitHandler, useForm } from "react-hook-form";

import { OptionsOfPayment } from "./components/OptionsOfPayment";
import { FormResquestOrder } from "./components/FormResquestOrder";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";

import { MenuOfOrdersMaked } from "./components/MenuOfOrdersMaked";
import { ShoppingCards, GuidanceShopping } from "./sytle";

function Shopping() {
  const navigate = useNavigate();
  const [options, setOptions] = useState(optionsOfPayments);
  const {
    listCoffeesInTheCart,
    setOrderResquetfinish,
    addedSelectedCoffeesToCart,
  } = useContext(CoffesAddedToCartContext);

  const haveNoMoreCoffesToBuy = listCoffeesInTheCart.length <= 0 ? true : false;

  const newCycleForm = useForm<FormOrderSend>({
    resolver: zodResolver(registerOrder),
  });

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    control,
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

  useEffect(() => {
    if (haveNoMoreCoffesToBuy) {
      reset();
      setOptions(optionsOfPayments);
    }

    const haveOptionSelected = options.findIndex(
      (option) => option.selected == true
    );

    if (haveOptionSelected != -1 && haveNoMoreCoffesToBuy == false) {
      setValue("modo_pagamento", optionsOfPayments[haveOptionSelected]?.form, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      return;
    } else {
      setValue("modo_pagamento", "", {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  }, [haveNoMoreCoffesToBuy, options, setValue, reset]);

  return (
    <>
      <GuidanceShopping onSubmit={handleSubmit(confirmOrder)}>
        <ShoppingCards>
          <FormResquestOrder
            errors={errors}
            control={control}
            setValue={setValue}
            register={register}
            formEnabled={haveNoMoreCoffesToBuy}
          />
          <OptionsOfPayment
            errors={errors}
            control={control}
            setValue={setValue}
            setOptions={setOptions}
            formEnabled={haveNoMoreCoffesToBuy}
            availableOperations={options}
          />
        </ShoppingCards>
        <ShoppingCards>
          <MenuOfOrdersMaked coffes={listCoffeesInTheCart} />
        </ShoppingCards>
      </GuidanceShopping>
    </>
  );
}

export default Shopping;
