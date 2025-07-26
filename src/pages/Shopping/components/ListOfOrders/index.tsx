import { CoffeList } from "../../../../Types/coffe";

import { useCallback, useContext, useMemo, useState } from "react";

import { ArrowFatLineLeft, ArrowFatLineRight } from "@phosphor-icons/react";

import {
  CalculateValuesOfCoffeForAllItens,
  updateListOfCoffeToBuy,
} from "../../../../Operations";

import { TitlePageAntCountPages } from "../../sytle";
import { AlignPagination, ButtonMoveRegister } from "./style";
import { CoffesAddedToCartContext } from "../../../../context/coffesAddedToCart";
import { PageItemOfOrder } from "./components/PageItemOfOrder";
import { propsListOfOrders } from "../../types";

const ListOfOrders = ({ CoffeList }: propsListOfOrders) => {
  const ITEMS_PER_PAGE = 2;

  const { addedSelectedCoffeesToCart } = useContext(CoffesAddedToCartContext);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CoffeList?.length / ITEMS_PER_PAGE);

  const needToEnablePagination = CoffeList?.length >= 3 ? true : false;

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

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return CoffeList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, CoffeList]);

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

  const addNewListCoffeUpdate = useCallback(
    (id: string, increse: boolean) => {
      const updateListOfOrder = updateListOfCoffeToBuy(CoffeList, id, increse);
      //setListOfCurrentOrder(updateListOfOrder.list);
      addedSelectedCoffeesToCart(updateListOfOrder?.list);
    },
    [CoffeList, addedSelectedCoffeesToCart]
  );

  const removeItemofListCoffe = useCallback(
    (id: string) => {
      const listCoffeWithoutItemRemoved = refundOrder(id).filter(
        (item) => item?.id !== id
      );
      const resultsOfNewList = CalculateValuesOfCoffeForAllItens(
        listCoffeWithoutItemRemoved
      );
      addedSelectedCoffeesToCart(resultsOfNewList.CoffeesInTheCart);
      setCurrentPage(1);
    },
    [addedSelectedCoffeesToCart, refundOrder]
  );

  return (
    <>
      {currentItems.map((coffeSell) => (
        <PageItemOfOrder
          key={coffeSell?.id}
          infoOfPageOrder={coffeSell}
          addNewListCoffeUpdate={addNewListCoffeUpdate}
          removeItemofListCoffe={removeItemofListCoffe}
        />
      ))}

      <AlignPagination>
        <ButtonMoveRegister
          type="button"
          onClick={handlePreviousPage}
          activePagination={needToEnablePagination}
        >
          <ArrowFatLineLeft size={24} />
        </ButtonMoveRegister>

        {needToEnablePagination && (
          <TitlePageAntCountPages>
            <span>página {currentPage}</span>
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
