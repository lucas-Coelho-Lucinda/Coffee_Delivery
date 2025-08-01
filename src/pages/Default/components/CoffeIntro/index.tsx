import { defaultTheme } from "../../../../../sytles/themes/default";
import imageDefault from "../../../../assets/foto_padrao_pagina.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  Title,
  SubTitle,
  IconBottom,
  TitleOfOptions,
  ItemDescription,
  CardDefaulLayout,
  PlatformDescriptions,
  CardImageStartOfPage,
  CardTitleAndSubtitle,
  CardTitleOfOptionsCoffesList,
} from "../../sytle";

const CoffeIntro = () => {
  return (
    <>
      <CardDefaulLayout>
        <CardTitleAndSubtitle>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </SubTitle>
          <PlatformDescriptions>
            <ItemDescription>
              <IconBottom color={defaultTheme["yellow-300"]}>
                <ShoppingCart size={14} weight="fill" />
              </IconBottom>
              Compra simples e segura
            </ItemDescription>
            <ItemDescription>
              <IconBottom color={defaultTheme["gray-800"]}>
                <Package size={14} weight="fill" />
              </IconBottom>
              Embalagem mantém o café intacto
            </ItemDescription>
            <ItemDescription>
              <IconBottom color={defaultTheme["yellow-200"]}>
                <Timer size={14} weight="fill" />
              </IconBottom>
              Entrega rápida e rastreada
            </ItemDescription>
            <ItemDescription>
              <IconBottom color={defaultTheme["purple-300"]}>
                <Coffee size={14} weight="fill" />
              </IconBottom>
              O café chega fresquinho até você
            </ItemDescription>
          </PlatformDescriptions>
        </CardTitleAndSubtitle>
        <CardImageStartOfPage>
          <img src={imageDefault} />
        </CardImageStartOfPage>
      </CardDefaulLayout>
      <CardTitleOfOptionsCoffesList>
        <TitleOfOptions>Nossos Cafés</TitleOfOptions>
      </CardTitleOfOptionsCoffesList>
    </>
  );
};

export default CoffeIntro;
