import { coffesList_Default } from "./coffesList_Default";
import { CoffeList } from "../../Types/coffe";
import CoffeeCard from "./components/coffeCard";
import { defaultTheme } from "../../../sytles/themes/default";
import imagePadrao from "../../assets/foto_padrao_pagina.png";
import { useCallback, useContext, useEffect, useState } from "react";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  CalculateValuesOfCoffeForItem,
  CalculateValuesDeliveryOfCoffeForItem,
} from "../../Operations";

import {
  Title,
  SubTitle,
  IconBottom,
  TitleOfOptions,
  CardMenuForSell,
  ItemDescription,
  CardDefaulLayout,
  CardTitleAnSubtitle,
  CardImageStartOfPage,
  PlatformDescriptions,
  CardTitleOfOptionsCoffesList,
} from "./sytle";

function LagoutDefault() {
  const [coffesListState, setCoffesList] =
    useState<CoffeList[]>(coffesList_Default);

  const { addedSelectedCoffeesToCart, listCoffeesInTheCart } = useContext(
    CoffesAddedToCartContext
  );

  useEffect(() => {
    try {
      if (listCoffeesInTheCart.length > 0) {
        setCoffesList((ListOfcoffes) => {
          return ListOfcoffes.map((coffe) => {
            const isThisCoffeAddToOrder = listCoffeesInTheCart.find(
              (coffeMarkAsSelected) => coffeMarkAsSelected.id === coffe.id
            );
            return isThisCoffeAddToOrder ? isThisCoffeAddToOrder : coffe;
          });
        });
      }
    } catch (error) {
      console.log(
        "Error when trying to update list of coffees added to purchase: ",
        error
      );
    }
  }, [listCoffeesInTheCart]);

  const addCoffeeToPurchaseAndMarkAsSelected = useCallback(
    (idCoffeSelected: string) => {
      try {
        setCoffesList((ListOfcoffes) => {
          const listofAllCoffes = ListOfcoffes.map((coffe) =>
            coffe.id === idCoffeSelected
              ? { ...coffe, is_selected: true }
              : coffe
          );
          const litsOfcoffeMarkAsSelected = listofAllCoffes.filter(
            (coffe) => coffe.is_selected == true
          );
          addedSelectedCoffeesToCart(
            litsOfcoffeMarkAsSelected,
            litsOfcoffeMarkAsSelected.length
          );
          return listofAllCoffes;
        });
      } catch (error) {
        console.log(
          "Error on function addCoffeeToPurchaseAndMarkAsSelected: ",
          error
        );
      }
    },
    [addedSelectedCoffeesToCart]
  );

  const updateCoffeListItem = useCallback(
    (idCoffeSelected: string, increase: boolean) => {
      try {
        setCoffesList((ListOfcoffes) => {
          const newList = ListOfcoffes.map((item) => {
            if (item.id !== idCoffeSelected) return item;

            let newAmount = increase ? item.amount + 1 : item.amount - 1;
            if (newAmount <= 0) newAmount = 1;

            return {
              ...item,
              amount: newAmount,
              value: CalculateValuesOfCoffeForItem(
                { ...item, amount: newAmount },
                true
              ),
              delivery_value: CalculateValuesDeliveryOfCoffeForItem(
                { ...item, amount: newAmount },
                true
              ),
            };
          });

          return newList;
        });
      } catch (error) {
        console.log("Error on function updateCoffeListItem: ", error);
      }
    },
    []
  );

  return (
    <>
      <CardDefaulLayout>
        <CardTitleAnSubtitle>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver,a qualquer
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
        </CardTitleAnSubtitle>
        <CardImageStartOfPage>
          <img src={imagePadrao} alt="" />
        </CardImageStartOfPage>
      </CardDefaulLayout>

      <CardTitleOfOptionsCoffesList>
        <TitleOfOptions>Nossos Cafés</TitleOfOptions>
      </CardTitleOfOptionsCoffesList>
      <CardMenuForSell>
        {coffesListState.map((coffe) => {
          return (
            <CoffeeCard
              key={coffe.id}
              coffe={coffe}
              onAdd={addCoffeeToPurchaseAndMarkAsSelected}
              onChangeAmount={updateCoffeListItem}
            />
          );
        })}
      </CardMenuForSell>
    </>
  );
}

export default LagoutDefault;
