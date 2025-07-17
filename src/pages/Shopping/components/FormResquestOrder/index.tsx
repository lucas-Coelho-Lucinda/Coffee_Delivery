import { MapPinLine } from "@phosphor-icons/react";
import { Controller } from "react-hook-form";
import { defaultTheme } from "../../../../../sytles/themes/default";
import React from "react";
import {
  FormAndresInput,
  MessageFormWarning,
  GuidanceShoppingAndress,
  GuidanceShoppingAdressForm,
  GuidanceShoppingAndressTitle,
  ShoppingSubText,
  ShoppingTitleRequested,
  WarningMessageDiv,
} from "../../sytle";
import { PropsFormResquestOrder } from "../../types";

export const FormResquestOrder = React.memo(
  ({
    errors,
    register,
    setValue,
    newCycleForm,
    formEnabled,
  }: PropsFormResquestOrder) => {
    return (
      <>
        <ShoppingTitleRequested>Complete seu pedido</ShoppingTitleRequested>
        <GuidanceShoppingAndress thisFormCanBeEnabled={formEnabled}>
          <GuidanceShoppingAndressTitle>
            <MapPinLine size={24} color={defaultTheme["yellow-300"]} />
            {/* <SubTitle text="Endereço de Entrega" /> */}
            <ShoppingSubText>
              Informe o endereço onde deseja receber seu pedido
            </ShoppingSubText>
          </GuidanceShoppingAndressTitle>
          <GuidanceShoppingAdressForm>
            <WarningMessageDiv>
              <Controller
                name="cep"
                control={newCycleForm.control}
                render={() => (
                  <FormAndresInput
                    maxLength={9}
                    type="text"
                    {...register("cep")}
                    placeholder="CEP"
                    size={"200px"}
                  />
                )}
              />
              {errors.cep && (
                <MessageFormWarning position={false}>
                  {errors.cep.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>
          </GuidanceShoppingAdressForm>
          <GuidanceShoppingAdressForm>
            <WarningMessageDiv>
              <Controller
                name="rua"
                control={newCycleForm.control}
                render={() => (
                  <FormAndresInput
                    type="text"
                    {...register("rua")}
                    placeholder="Rua"
                    size={"538px"}
                  />
                )}
              />
              {errors.rua && (
                <MessageFormWarning position={false}>
                  {errors.rua.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>
          </GuidanceShoppingAdressForm>
          <GuidanceShoppingAdressForm>
            <WarningMessageDiv>
              <Controller
                name="numero"
                control={newCycleForm.control}
                render={() => (
                  <FormAndresInput
                    maxLength={5}
                    type="text"
                    {...register("numero")}
                    placeholder="Número"
                    size={"200px"}
                  />
                )}
              />
              {errors.numero && (
                <MessageFormWarning position={false}>
                  {errors.numero.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <Controller
              name="complemento"
              control={newCycleForm.control}
              render={() => (
                <FormAndresInput
                  type="text"
                  {...register("complemento")}
                  placeholder="Complemento"
                  size={"348px"}
                />
              )}
            />
          </GuidanceShoppingAdressForm>
          <GuidanceShoppingAdressForm>
            <WarningMessageDiv>
              <Controller
                name="bairro"
                control={newCycleForm.control}
                render={() => (
                  <FormAndresInput
                    type="text"
                    {...register("bairro")}
                    placeholder="Bairro"
                    size={"348px"}
                  />
                )}
              />
              {errors.bairro && (
                <MessageFormWarning position={false}>
                  {errors.bairro.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <WarningMessageDiv>
              <Controller
                name="cidade"
                control={newCycleForm.control}
                render={() => (
                  <FormAndresInput
                    type="text"
                    {...register("cidade")}
                    placeholder="Cidade"
                    size={"360px"}
                  />
                )}
              />
              {errors.cidade && (
                <MessageFormWarning position={false}>
                  {errors.cidade.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>

            <WarningMessageDiv>
              <Controller
                name="UF"
                control={newCycleForm.control}
                render={() => (
                  <FormAndresInput
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
                <MessageFormWarning position={false}>
                  {errors.UF.message}
                </MessageFormWarning>
              )}
            </WarningMessageDiv>
          </GuidanceShoppingAdressForm>
        </GuidanceShoppingAndress>
      </>
    );
  }
);
