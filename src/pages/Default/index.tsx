import { coffesList } from "./coffes";
import { CoffeList } from "../../Types/coffe";
import CoffeeCard from "./components/coffeCard";
import { defaultTheme } from "../../../sytles/themes/default";
import imagePadrao from "../../assets/foto_padrao_pagina.png";
import { useCallback, useContext, useEffect, useState } from "react";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import {
  CalculateValuesDeliveryOfCoffeForItem,
  CalculateValuesOfCoffeForItem,
} from "../../functions/result";

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
  const { addedSelectedCoffeesToCart, listCoffeesInTheCart } = useContext(
    CoffesAddedToCartContext
  );

  const [coffesListState, setCoffesList] = useState<CoffeList[]>(coffesList);

  useEffect(() => {
    if (listCoffeesInTheCart.length > 0) {
      setCoffesList((ListOfcoffes) => {
        return ListOfcoffes.map((coffe) => {
          const isCoffeSelected = listCoffeesInTheCart.find(
            (coffeMarkAsSelected) => coffeMarkAsSelected.id === coffe.id
          );
          return isCoffeSelected ? isCoffeSelected : coffe;
        });
      });
    }
  }, [listCoffeesInTheCart]);

  const AddCoffeeToPurchaseAndMarkAsSelected = useCallback(
    (idCoffeSelected: string) => {
      setCoffesList((ListOfcoffes) => {
        const listofAllCoffes = ListOfcoffes.map((coffe) =>
          coffe.id === idCoffeSelected ? { ...coffe, is_selected: true } : coffe
        );
        const coffeMarkAsSelected = listofAllCoffes.filter(
          (coffe) => coffe.is_selected == true
        );
        addedSelectedCoffeesToCart(
          coffeMarkAsSelected,
          coffeMarkAsSelected.length
        );
        return listofAllCoffes;
      });
    },
    [addedSelectedCoffeesToCart]
  );

  const genereiteNewLista = useCallback(
    (idCoffeSelected: string, increase: boolean) => {
      setCoffesList((prev) => {
        const newList = prev.map((item) => {
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
              onAdd={AddCoffeeToPurchaseAndMarkAsSelected}
              onChangeAmount={genereiteNewLista}
            />
          );
        })}
      </CardMenuForSell>
    </>
  );
}

export default LagoutDefault;
