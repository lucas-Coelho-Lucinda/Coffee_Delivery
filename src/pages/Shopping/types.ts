import { JSX } from "react";
import { CoffeList, FormOrderSend } from "../../Types/coffe";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ZodMiniUUID } from "zod/v4-mini";

export interface PropsFormResquestOrder {
  formEnabled: boolean;
  errors: FieldErrors<FormOrderSend>;
  register: UseFormRegister<FormOrderSend>;
  setValue: UseFormSetValue<FormOrderSend>;
  control: Control<FormOrderSend, FormOrderSend>;
}

export interface enableFormComponet {
  thisformcanbeenabled: boolean;
}

export interface propsMessageFormWarning {
  top: string;
  left: string;
  position: string;
  font_size: string;
  enableControlPosition: boolean;
}

export interface buttonForm {
  id: ZodMiniUUID;
  form: string;
  selected: boolean;
  incone: JSX.Element;
}

export interface PropsOptionsOfPayment {
  formEnabled: boolean;
  control: Control<FormOrderSend>;
  availableOperations: buttonForm[];
  errors: FieldErrors<FormOrderSend>;
  setValue: UseFormSetValue<FormOrderSend>;
}

export interface propsValuesOfOrder {
  valueTotalOfAllPayment: string;
  valueTotalOfAllItensSome: string;
  valueTotalOfAllDeliveryValue: string;
}

export interface propsMenuOfOrdersMaked {
 coffes : CoffeList[];
}


export interface propsListOfOrders {
  CoffeList: CoffeList[];
}

export interface propsDeffaulValueToPay{
  color: string;
  background_color: string;
}

export interface propsButtonMoveRegisterProps {
  activePagination: boolean;
}

