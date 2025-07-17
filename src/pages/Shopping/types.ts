import { JSX } from "react";
import { FormOrderSend } from "../../Types/coffe";
import {
  FieldErrors,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
} from "react-hook-form";
import { ZodMiniUUID } from "zod/v4-mini";

export interface PropsFormResquestOrder {
  formEnabled: boolean;
  errors: FieldErrors<FormOrderSend>;
  register: UseFormRegister<FormOrderSend>;
  setValue: UseFormSetValue<FormOrderSend>;
  newCycleForm: UseFormReturn<FormOrderSend, FormOrderSend>;
}

export interface GuidanceShoppingAndressProps {
  thisFormCanBeEnabled: boolean;
}

export interface buttonForm {
  id: ZodMiniUUID;
  selected: boolean;
  form: string;
  incone: JSX.Element;
}

export interface PropsOptionsOfPayment {
  formEnabled: boolean;
  availableOperations: buttonForm[];
  errors: FieldErrors<FormOrderSend>;
  setValue: UseFormSetValue<FormOrderSend>;
}
