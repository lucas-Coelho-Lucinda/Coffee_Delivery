import React from "react";
import { propsCoffeCard } from "../types";
import { ShoppingCart } from "@phosphor-icons/react";

import {
  TitleCoffee,
  OptionOfMenu,
  TextAddAmount,
  SubTitleCoffee,
  TypeCoffeeOffer,
  ButtonAddShopping,
  ButtonAddAmountPlus,
  CardOfDeffaultValue,
  TitleCoffeeContainer,
  ValueOfCoffeCurrent,
  CardTransactionsCoffee,
  CardImageOfCoffeToSell,
  PriceContainerOnCoffee,
  ButtonAddAmountNegative,
  CarButtonAddOrRemoveAmount,
  OrderButtonPositioningCard,
  TextDescriptionOfDevaultValue,
} from "../sytle";

export const CoffeeListToSell = React.memo(
  ({ coffe, onAdd, onChangeAmount }: propsCoffeCard) => {
    return (
      <OptionOfMenu key={coffe.id} optionSelected={coffe.is_selected}>
        <CardImageOfCoffeToSell>
          <img src={coffe.img} alt="" />
        </CardImageOfCoffeToSell>
        <TitleCoffeeContainer>
          {coffe.coffeeCharacteristics.map((Feature) => (
            <TypeCoffeeOffer key={Feature.id}>
              {Feature.adjective}
            </TypeCoffeeOffer>
          ))}
        </TitleCoffeeContainer>

        <TitleCoffee>{coffe.title}</TitleCoffee>

        <SubTitleCoffee>{coffe.subTitles}</SubTitleCoffee>
        <CardOfDeffaultValue>
          <PriceContainerOnCoffee color="yellow-300" background="yellow-100">
            <TextDescriptionOfDevaultValue>
              Apartir de:
            </TextDescriptionOfDevaultValue>
            {coffe.valueDefault}
          </PriceContainerOnCoffee>

          <PriceContainerOnCoffee color="yellow-300" background="yellow-100">
            <TextDescriptionOfDevaultValue>
              Frete fixo:
            </TextDescriptionOfDevaultValue>
            {coffe.deliveryValueDefault}
          </PriceContainerOnCoffee>

          <PriceContainerOnCoffee color="purple-300" background="purple-100">
            <TextDescriptionOfDevaultValue>
              Frete atual:
            </TextDescriptionOfDevaultValue>
            {coffe.deliveryValue}
          </PriceContainerOnCoffee>
        </CardOfDeffaultValue>
        <CardTransactionsCoffee>
          <ValueOfCoffeCurrent>{coffe.value}</ValueOfCoffeCurrent>
          <OrderButtonPositioningCard>
            <CarButtonAddOrRemoveAmount>
              <ButtonAddAmountNegative
                onClick={() => onChangeAmount(coffe?.id, false)}
              >
                -
              </ButtonAddAmountNegative>
              <TextAddAmount>{coffe.amount}</TextAddAmount>
              <ButtonAddAmountPlus
                onClick={() => onChangeAmount(coffe?.id, true)}
              >
                +
              </ButtonAddAmountPlus>
            </CarButtonAddOrRemoveAmount>
            <ButtonAddShopping onClick={() => onAdd(coffe?.id)}>
              <ShoppingCart size={24} weight="fill" />
            </ButtonAddShopping>
          </OrderButtonPositioningCard>
        </CardTransactionsCoffee>
      </OptionOfMenu>
    );
  }
);
