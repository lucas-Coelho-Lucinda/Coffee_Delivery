import React from "react";
import { Controller } from "react-hook-form";
import { MapPinLine } from "@phosphor-icons/react";
import { defaultTheme } from "../../../../../sytles/themes/default";
import {
  FormInput,
  MessageFormWarning,
  CardFormField,
  CardFieldAndWarning,
  TextsDefaultForm,
  SubTitleFormField,
  ShoppingTitleRequested,
  WarningMessageDiv,
  TitleFormField,
} from "../../sytle";
import { PropsFormResquestOrder } from "../../types";

export const FormResquestOrder = React.memo(
  ({
    errors,
    control,
    register,
    setValue,
    formEnabled,
  }: PropsFormResquestOrder) => {
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
                    {...register("cep")}
                    placeholder="CEP"
                    size={"200px"}
                  />
                )}
              />
              {errors.cep && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors.cep.message}
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
                    {...register("rua")}
                    placeholder="Rua"
                    size={"538px"}
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
                  {errors.rua.message}
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
                    {...register("numero")}
                    placeholder="Número"
                    size={"200px"}
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
                  {errors.numero.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <Controller
              name="complemento"
              control={control}
              render={() => (
                <FormInput
                  type="text"
                  {...register("complemento")}
                  placeholder="Complemento"
                  size={"348px"}
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
                    {...register("bairro")}
                    placeholder="Bairro"
                    size={"348px"}
                  />
                )}
              />
              {errors.bairro && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors.bairro.message}
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
                    {...register("cidade")}
                    placeholder="Cidade"
                    size={"360px"}
                  />
                )}
              />
              {errors.cidade && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors.cidade.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <WarningMessageDiv>
              <Controller
                name="UF"
                control={control}
                render={() => (
                  <FormInput
                    maxLength={2}
                    type="text"
                    {...register("UF")}
                    placeholder="UF"
                    size={"20px"}
                    onChange={(e) =>
                      setValue("UF", e.target.value.toUpperCase())
                    }
                  />
                )}
              />
              {errors.UF && (
                <MessageFormWarning
                  top={""}
                  left={""}
                  position={""}
                  font_size={""}
                  enableControlPosition={false}
                >
                  {errors.UF.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>
          </CardFieldAndWarning>
        </CardFormField>
      </>
    );
  }
);
