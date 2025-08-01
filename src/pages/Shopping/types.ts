import { JSX } from "react";
import { ZodMiniUUID } from "zod/v4-mini";
import { CoffeList, FormOrderSend } from "../../Types/coffe";

import {
  Control,
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import {
  totalCalculeOrder,
  listAllInforOfOrderProps,
} from "../../context/types";

export interface PropsFormResquestOrder {
  formEnabled: boolean;
  errors: FieldErrors<FormOrderSend>;
  register: UseFormRegister<FormOrderSend>;
}

export interface PropsInputForm {
  name: keyof FormOrderSend;
  size: string;
  maxLength?: number;
  placeholder: string;
  uppercaseText: boolean;
  error?: FieldError | undefined;
  register: UseFormRegister<FormOrderSend>;
}

export interface MenuFormOfPaymentProps {
  formEnabled: boolean;
  errors: FieldErrors<FormOrderSend>;
  setValue: UseFormSetValue<FormOrderSend>;
  control: Control<FormOrderSend, FormOrderSend>;
}

export interface PropsOptionsOfPayment {
  formEnabled: boolean;
  control: Control<FormOrderSend>;
  availableOperations: buttonForm[];
  errors: FieldErrors<FormOrderSend>;
  setOptions: React.Dispatch<
    React.SetStateAction<
      {
        id: ZodMiniUUID;
        selected: boolean;
        form: string;
        incone: JSX.Element;
      }[]
    >
  >;
}

export interface propsMessageFormWarning {
  top: string;
  left: string;
  position: string;
  font_size: string;
  enableControlPosition: boolean;
}

export interface paginationOfOrdersProps {
  infoOfPageOrder: CoffeList;
  removeItemofListCoffe: (id: string) => void;
  addNewListCoffeUpdate: (id: string, increse: boolean) => void;
}

export interface propsValuesOfOrder {
  valueTotalOfAllPayment: string;
  valueTotalOfAllItensSome: string;
  valueTotalOfAllDeliveryValue: string;
}
export interface propsListOfOrders {
  coffes: listAllInforOfOrderProps;
  salveCurrentPaymentOfOrder: (payment: totalCalculeOrder) => void;
}

export interface buttonForm {
  id: ZodMiniUUID;
  form: string;
  selected: boolean;
  incone: JSX.Element;
}

export interface propsDeffaulValueToPay {
  color: string;
  background_color: string;
}

export interface MenuOfOrdersMakedProps {
  disableFormOptionAndResetForm: (Actived: boolean) => void;
}

export interface propsButtonMoveRegisterProps {
  activePagination: boolean;
}

export interface propsValuesOfOrder {
  listCurrentForCalculate: CoffeList[];
}

export interface enableFormComponet {
  thisformcanbeenabled: boolean;
}

export interface formAndresProps {
  size: string;
  uppercaseText: boolean;
}

export interface formButtonPaymenProps {
  selected: boolean;
}
