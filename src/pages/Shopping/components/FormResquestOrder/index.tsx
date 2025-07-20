import React from "react";
import { Controller } from "react-hook-form";
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

export const FormResquestOrder = React.memo(
  ({ errors, control, register, formEnabled }: PropsFormResquestOrder) => {
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
          <CardFieldAndWarning>
            <WarningMessageDiv>
              <Controller
                name="cep"
                control={control}
                render={() => (
                  <FormInput
                    maxLength={9}
                    type="text"
                    size={"200px"}
                    placeholder="CEP"
                    {...register("cep")}
                    uppercaseText={false}
                  />
                )}
              />
              {errors?.cep && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors?.cep?.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>
          </CardFieldAndWarning>
          <CardFieldAndWarning>
            <WarningMessageDiv>
              <Controller
                name="rua"
                control={control}
                render={() => (
                  <FormInput
                    type="text"
                    size={"538px"}
                    placeholder="Rua"
                    {...register("rua")}
                    uppercaseText={false}
                  />
                )}
              />
              {errors.rua && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors?.rua?.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>
          </CardFieldAndWarning>
          <CardFieldAndWarning>
            <WarningMessageDiv>
              <Controller
                name="numero"
                control={control}
                render={() => (
                  <FormInput
                    maxLength={5}
                    type="text"
                    size={"200px"}
                    placeholder="Número"
                    uppercaseText={false}
                    {...register("numero")}
                  />
                )}
              />
              {errors.numero && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors?.numero?.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <Controller
              name="complemento"
              control={control}
              render={() => (
                <FormInput
                  type="text"
                  size={"348px"}
                  uppercaseText={false}
                  placeholder="Complemento"
                  {...register("complemento")}
                />
              )}
            />
          </CardFieldAndWarning>
          <CardFieldAndWarning>
            <WarningMessageDiv>
              <Controller
                name="bairro"
                control={control}
                render={() => (
                  <FormInput
                    type="text"
                    size={"348px"}
                    placeholder="Bairro"
                    uppercaseText={false}
                    {...register("bairro")}
                  />
                )}
              />
              {errors?.bairro && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors?.bairro?.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <WarningMessageDiv>
              <Controller
                name="cidade"
                control={control}
                render={() => (
                  <FormInput
                    type="text"
                    size={"360px"}
                    placeholder="Cidade"
                    uppercaseText={false}
                    {...register("cidade")}
                  />
                )}
              />
              {errors?.cidade && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors?.cidade?.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <WarningMessageDiv>
              <Controller
                name="UF"
                control={control}
                render={() => (
                  <FormInput
                    type="text"
                    maxLength={2}
                    size={"20px"}
                    placeholder="UF"
                    {...register("UF")}
                    uppercaseText={true}
                  />
                )}
              />
              {errors?.UF && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors?.UF?.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>
          </CardFieldAndWarning>
        </CardFormField>
      </>
    );
  }
);
