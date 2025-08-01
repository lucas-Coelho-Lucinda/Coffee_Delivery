import { useContext } from "react";
import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import { CoffesAddedToCartContext } from "../../context/coffesAddedContext";
import {
  TextInfo,
  IconCard,
  InforMark,
  GuidanceResquest,
  IconAndTextsInfos,
  OrderInfosOfRequest,
  OrderTitleAndSubTitle,
  TitleOfConcluidedOrder,
  SubTitleOfConcluidedOrder,
} from "./sytle";

export function RequestConcluded() {
  const { orderResquetfinish } = useContext(CoffesAddedToCartContext);

  const nameofFieldContainsStreet = /(^|\s)(r\.?|rua|roa|rwa)(\s|$)/i;

  const nameOfStreet = nameofFieldContainsStreet.test(
    orderResquetfinish?.orderInfo?.rua
  )
    ? orderResquetfinish?.orderInfo?.rua
    : "Rua " + orderResquetfinish?.orderInfo?.rua;

  const haveComplement =
    orderResquetfinish?.orderInfo?.complemento != ""
      ? orderResquetfinish?.orderInfo?.complemento + ","
      : "";

  return (
    <GuidanceResquest>
      <OrderTitleAndSubTitle>
        <TitleOfConcluidedOrder>Uhu! Pedido Confirmado</TitleOfConcluidedOrder>
        <SubTitleOfConcluidedOrder>
          Agora é só aguardar que logo o café chegará até você
        </SubTitleOfConcluidedOrder>
        <OrderInfosOfRequest>
          <IconAndTextsInfos>
            <IconCard color="purple-500">
              <MapPin size={16} weight="fill" />
            </IconCard>
            <TextInfo>
              Entrega em{" "}
              <InforMark>
                {nameOfStreet}, {orderResquetfinish?.orderInfo?.numero}
              </InforMark>
              <br />
              {haveComplement} {orderResquetfinish?.orderInfo?.bairro} -{" "}
              {orderResquetfinish?.orderInfo?.cidade},{" "}
              {orderResquetfinish?.orderInfo?.UF}
            </TextInfo>
          </IconAndTextsInfos>
          <IconAndTextsInfos>
            <IconCard color="yellow-200">
              <Timer size={16} weight="fill" />
            </IconCard>
            <TextInfo>
              Previsão de entrega
              <br />
              <InforMark>20 min - 30 min </InforMark>
            </TextInfo>
          </IconAndTextsInfos>
          <IconAndTextsInfos>
            <IconCard color="yellow-300">
              <CurrencyDollarSimple size={16} />
            </IconCard>
            <TextInfo>
              Pagamento na entrega
              <br />
              <InforMark>
                {orderResquetfinish?.orderInfo?.modo_pagamento}
              </InforMark>
            </TextInfo>
          </IconAndTextsInfos>
        </OrderInfosOfRequest>
      </OrderTitleAndSubTitle>
      <img src="/src/assets/ilustracao.png" alt="" />
    </GuidanceResquest>
  );
}
