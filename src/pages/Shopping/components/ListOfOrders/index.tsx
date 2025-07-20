import { propsListOfOrders } from "../../types";
import { CoffeList } from "../../../../Types/coffe";

import { useCallback, useContext, useMemo, useState } from "react";
import { defaultTheme } from "../../../../../sytles/themes/default";
import { CoffesAddedToCartContext } from "../../../../context/coffesAddedToCart";

import {
  Trash,
  ArrowFatLineLeft,
  ArrowFatLineRight,
} from "@phosphor-icons/react";

import {
  updateListOfCoffeToBuy,
  CalculateValuesOfCoffeForAllItens,
} from "../../../../Operations";

import { AlignPagination, ButtonMoveRegister } from "./style";
import {
  TextAddAmount,
  RemoveShopping,
  LineSepareitor,
  DeffaulValueToPay,
  DescriptionOfCoffe,
  ButtonAddAmountPlus,
  ItensValuesOfOrders,
  OrderDescritionOption,
  OrderOptionCoffesToBuy,
  TitlePageAntCountPages,
  ButtonAddAmountNegative,
  ValueCurrentOfCoffeToPay,
  CarButtonAddOrRemoveAmount,
  GuidanceButtonsOptionValues,
  CardImageOptionsCoffesToSell,
} from "../../sytle";

const ListOfOrders = ({ CoffeList }: propsListOfOrders) => {
  const ITEMS_PER_PAGE = 2;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CoffeList?.length / ITEMS_PER_PAGE);

  const needToEnablePagination = CoffeList?.length >= 3 ? true : false;

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return CoffeList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, CoffeList]);

  const { addedSelectedCoffeesToCart } = useContext(CoffesAddedToCartContext);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const addNewListCoffeUpdate = useCallback(
    (coffes: CoffeList[], id: string, increse: boolean) => {
      const updateListOfOrder = updateListOfCoffeToBuy(coffes, id, increse);
      addedSelectedCoffeesToCart(
        updateListOfOrder?.list,
        updateListOfOrder?.list.length
      );
    },
    [addedSelectedCoffeesToCart]
  );

  const refundOrder = useCallback(
    (id: string): CoffeList[] => {
      return CoffeList.map((elemento) =>
        elemento?.id === id
          ? {
              ...elemento,
              amount: 1,
              is_selected: false,
              value: elemento?.valueDefault,
              deliveryValue: elemento?.deliveryValueDefault,
            }
          : elemento
      );
    },
    [CoffeList]
  );

  const removeItemofListCoffe = useCallback(
    (id: string) => {
      const listCoffeWithoutItemRemoved = refundOrder(id).filter(
        (item) => item?.id !== id
      );
      const resultsOfNewList = CalculateValuesOfCoffeForAllItens(
        listCoffeWithoutItemRemoved
      );
      setCurrentPage(1);
      addedSelectedCoffeesToCart(
        resultsOfNewList.coffeSell,
        resultsOfNewList.coffeSell?.length
      );
    },
    [refundOrder, addedSelectedCoffeesToCart]
  );

  return (
    <>
      {currentItems.map((coffeSell, index) => (
        <div key={`${coffeSell?.id}-${index}`}>
          <OrderOptionCoffesToBuy>
            <CardImageOptionsCoffesToSell>
              <img src={coffeSell?.img} />
            </CardImageOptionsCoffesToSell>
            <OrderDescritionOption>
              <DescriptionOfCoffe>{coffeSell?.title}</DescriptionOfCoffe>
              <GuidanceButtonsOptionValues>
                <CarButtonAddOrRemoveAmount>
                  <ButtonAddAmountNegative
                    type="button"
                    onClick={() =>
                      addNewListCoffeUpdate(CoffeList, coffeSell?.id, false)
                    }
                  >
                    -
                  </ButtonAddAmountNegative>
                  <TextAddAmount>{coffeSell?.amount}</TextAddAmount>
                  <ButtonAddAmountPlus
                    type="button"
                    onClick={() =>
                      addNewListCoffeUpdate(CoffeList, coffeSell?.id, true)
                    }
                  >
                    +
                  </ButtonAddAmountPlus>
                </CarButtonAddOrRemoveAmount>
                <RemoveShopping
                  onClick={() => removeItemofListCoffe(coffeSell?.id)}
                >
                  <Trash size={16} color={defaultTheme["purple-500"]} />
                  REMOVER
                </RemoveShopping>
              </GuidanceButtonsOptionValues>
            </OrderDescritionOption>
            <ItensValuesOfOrders>
              <DeffaulValueToPay
                color="yellow-300"
                background_color="yellow-100"
              >
                <p>Apartir de:</p>
                {coffeSell?.valueDefault}
              </DeffaulValueToPay>
              <DeffaulValueToPay
                color="yellow-300"
                background_color="yellow-100"
              >
                <p>Frete fixo:</p>
                {coffeSell?.deliveryValueDefault}
              </DeffaulValueToPay>
              <DeffaulValueToPay
                color="purple-300"
                background_color="purple-100"
              >
                <p>Frete atual:</p>
                {coffeSell?.deliveryValue}
              </DeffaulValueToPay>
              <ValueCurrentOfCoffeToPay>
                {coffeSell?.value}
              </ValueCurrentOfCoffeToPay>
            </ItensValuesOfOrders>
          </OrderOptionCoffesToBuy>
          <LineSepareitor />
        </div>
      ))}

      <AlignPagination>
        <ButtonMoveRegister
          type="button"
          onClick={handlePreviousPage}
          activePagination={needToEnablePagination}
        >
          <ArrowFatLineLeft size={24} />
        </ButtonMoveRegister>

        {CoffeList.length >= 3 && (
          <TitlePageAntCountPages>
            <span>página: {currentPage}</span>
            <span>de {totalPages} páginas</span>
          </TitlePageAntCountPages>
        )}

        <ButtonMoveRegister
          type="button"
          onClick={handleNextPage}
          activePagination={needToEnablePagination}
        >
          <ArrowFatLineRight size={24} />
        </ButtonMoveRegister>
      </AlignPagination>
    </>
  );
};

export default ListOfOrders;
