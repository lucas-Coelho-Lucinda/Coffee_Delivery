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
  control: Control<FormOrderSend, FormOrderSend>;
}

export interface MenuFormOfPaymentProps {
  errors: FieldErrors<FormOrderSend>;
  control: Control<FormOrderSend, FormOrderSend>;
  setValue: UseFormSetValue<FormOrderSend>;
  formEnabled: boolean;
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


export interface MenuOfOrdersMakedProps {
  disableFormOptionAndResetForm: (Actived: boolean) => void
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
  CoffeList: CoffeList[];
}

export interface propsDeffaulValueToPay {
  color: string;
  background_color: string;
}

export interface propsButtonMoveRegisterProps {
  activePagination: boolean;
}
