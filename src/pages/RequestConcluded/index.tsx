import { useContext } from "react";
import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";
import {
  GuidanceResquest,
  IconAndTextsInfos,
  IconCard,
  InforMark,
  OrderInfosOfRequest,
  OrderTitleAndSubTitle,
  SubTitleOfConcluidedOrder,
  TextInfo,
  TitleOfConcluidedOrder,
} from "./sytle";

export function RequestConcluded() {
  const { orderResquetfinish } = useContext(CoffesAddedToCartContext);
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
                {orderResquetfinish.rua}, {orderResquetfinish.numero}
              </InforMark>
               <br />
              {orderResquetfinish.bairro}{" "}
              - {orderResquetfinish.cidade}, {orderResquetfinish.UF}
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
              <InforMark>{orderResquetfinish.modo_pagamento}</InforMark>
            </TextInfo>
          </IconAndTextsInfos>
        </OrderInfosOfRequest>
      </OrderTitleAndSubTitle>
      <img src="/src/assets/ilustracao.png" alt="" />
    </GuidanceResquest>
  );
}
