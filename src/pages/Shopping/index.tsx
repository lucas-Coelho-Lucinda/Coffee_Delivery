import { useNavigate } from "react-router-dom";
import { registerOrder } from "./zod/shopping.zod";
import { FormOrderSend } from "../../Types/coffe";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShoppingCards, GuidanceShopping } from "./sytle";
import { MenuOfOrdersMaked } from "./components/MenuOfOrdersMaked";
import { MenuFormOfPayment } from "./components/MenuFormOfPayment";
import { FormResquestOrder } from "./components/FormResquestOrder";
import { useCallback, useContext, useState } from "react";
import { CoffesAddedToCartContext } from "../../context/coffesAddedContext";

function Shopping() {
  const navigate = useNavigate();

  const [formMustBeDeactivated, FormMustBeDeactivated] = useState(false);
  const { saveOrderCurrent, addedSelectedCoffeesToCart } = useContext(
    CoffesAddedToCartContext
  );

  const refundAllOrder = useCallback(() => {
    addedSelectedCoffeesToCart([]);
  }, [addedSelectedCoffeesToCart]);

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

  const confirmOrder: SubmitHandler<FormOrderSend> = useCallback(
    (OrderResquest) => {
      saveOrderCurrent({
        orderInfo: OrderResquest,
      });
      refundAllOrder();
      navigate("/Request", { replace: true });
    },
    [navigate, refundAllOrder, saveOrderCurrent]
  );

  const disableFormOptionAndResetForm = useCallback(
    (Actived: boolean) => {
      reset();
      FormMustBeDeactivated(Actived);
    },
    [reset]
  );

  return (
    <GuidanceShopping onSubmit={handleSubmit(confirmOrder)}>
      <ShoppingCards>
        <FormResquestOrder
          errors={errors}
          register={register}
          formEnabled={formMustBeDeactivated}
        />
        <MenuFormOfPayment
          control={control}
          errors={errors}
          setValue={setValue}
          formEnabled={formMustBeDeactivated}
        />
      </ShoppingCards>
      <ShoppingCards>
        <MenuOfOrdersMaked
          disableFormOptionAndResetForm={disableFormOptionAndResetForm}
        />
      </ShoppingCards>
    </GuidanceShopping>
  );
}

export default Shopping;
