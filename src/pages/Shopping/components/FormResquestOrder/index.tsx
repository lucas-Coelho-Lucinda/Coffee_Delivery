import { MapPinLine } from "@phosphor-icons/react";
import { defaultTheme } from "../../../../../sytles/themes/default";
import {
  FormInput,
  CardFormField,
  TitleFormField,
  TextsDefaultForm,
  SubTitleFormField,
  WarningMessageDiv,
  MessageFormWarning,
  CardFieldAndWarning,
  ShoppingTitleRequested,
} from "../../sytle";
import { PropsFormResquestOrder } from "../../types";
import { fieldGroups } from "../../zod/shopping.zod";
import { useCallback } from "react";

export const FormResquestOrder = ({
  errors,
  register,
  formEnabled,
}: PropsFormResquestOrder) => {
  const blockTextNumbers = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (/\d/.test(e.key)) {
        e.preventDefault();
      }
    },
    []
  );

  const blockTextletter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const isNumber = /^[0-9]$/.test(e.key);
      const allowedKeys = [
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Tab",
      ];

      if (!isNumber && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    },
    []
  );

  const verifyText = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, allowTypingNumbers: boolean) => {
      try {
        if (allowTypingNumbers) {
          blockTextletter(e);
        } else {
          blockTextNumbers(e);
        }
      } catch (error) {
        console.log("error on function verifyText: ", error);
      }
    },
    [blockTextletter, blockTextNumbers]
  );

  return (
    <>
      <ShoppingTitleRequested>Complete seu pedido</ShoppingTitleRequested>

      <CardFormField thisformcanbeenabled={formEnabled}>
        <TextsDefaultForm>
          <MapPinLine size={24} color={defaultTheme["yellow-300"]} />
          <TitleFormField>Endereço de Entrega</TitleFormField>
          <SubTitleFormField>
            Informe o endereço onde deseja receber seu pedido
          </SubTitleFormField>
        </TextsDefaultForm>

        {fieldGroups.map((group, i) => (
          <CardFieldAndWarning key={i}>
            {group.fields.map(
              ({
                name,
                size,
                placeholder,
                maxLength,
                uppercaseText,
                allowTypingNumbers,
              }) => (
                <WarningMessageDiv key={name}>
                  <FormInput
                    {...register(name)}
                    size={size}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    type="text"
                    onKeyDown={(e) => verifyText(e, allowTypingNumbers)}
                    uppercaseText={uppercaseText ?? false}
                  />
                  {errors[name] && (
                    <MessageFormWarning
                      top={""}
                      left={""}
                      position={""}
                      font_size={""}
                      enableControlPosition={false}
                    >
                      {errors[name]?.message}
                    </MessageFormWarning>
                  )}
                </WarningMessageDiv>
              )
            )}
          </CardFieldAndWarning>
        ))}
      </CardFormField>
    </>
  );
};
