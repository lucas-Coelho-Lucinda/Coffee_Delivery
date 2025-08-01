import { propsListOfOrders } from "../../types";

import { CoffeList } from "../../../../Types/coffe";

import { TitlePageAntCountPages } from "../../sytle";

import { AlignPagination, ButtonMoveRegister } from "./style";

import { PageItemOfOrder } from "./components/PageItemOfOrder";

import { useCallback, useEffect, useMemo, useState } from "react";

import { commitCoffeesAndReturnValues } from "../../../../Backup";

import { listAllInforOfOrderProps } from "../../../../context/types";

import { ArrowFatLineLeft, ArrowFatLineRight } from "@phosphor-icons/react";

import {
  calculateValuesOfCoffeForAllItens,
  updateListOfCoffeToBuy,
} from "../../../../Operations";

const ListOfOrders = ({
  coffes,
  salveCurrentPaymentOfOrder,
}: propsListOfOrders) => {
  const ITEMS_PER_PAGE = 2;

  const [currentPage, setCurrentPage] = useState(1);

  const [localCoffees, setLocalCoffees] = useState<CoffeList[]>([]);

  useEffect(() => {
    setLocalCoffees(coffes?.CoffeesInTheCart);
  }, [coffes]);

  const totalPages = Math.ceil(
    coffes?.CoffeesInTheCart?.length / ITEMS_PER_PAGE
  );

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

  const needToEnablePagination =
    coffes?.CoffeesInTheCart?.length >= 3 ? true : false;

  const currentItems = useMemo(() => {
    try {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      return localCoffees.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    } catch (error) {
      console.log("erro on splice register of coffelist", error);
      return [];
    }
  }, [currentPage, localCoffees]);

   const UpdataPaymentAndCoffeList = useCallback(
    (
      coffesUpdate: listAllInforOfOrderProps,
      activedReloadOfRegister: boolean
    ) => {
      try {
        salveCurrentPaymentOfOrder({
          valueTotalOfAllPayment: coffesUpdate.valueTotalOfAllPayment,
          valueTotalOfAllItensSome: coffesUpdate.valueTotalOfAllItensSome,
          valueTotalOfAllDeliveryValue:
            coffesUpdate.valueTotalOfAllDeliveryValue,
        });
        commitCoffeesAndReturnValues(
          coffesUpdate.CoffeesInTheCart,
          activedReloadOfRegister
        );
      } catch (error) {
        console.log("error on funtion UpdataPaymentAndCoffeList", error);
      }
    },
    [salveCurrentPaymentOfOrder]
  );

  const addNewListCoffeUpdate = useCallback(
    (id: string, increse: boolean) => {
      try {
        setLocalCoffees((prev) => {
          const listCoffeUpdate = updateListOfCoffeToBuy(prev, id, increse);
          UpdataPaymentAndCoffeList(listCoffeUpdate, false);
          return listCoffeUpdate?.CoffeesInTheCart;
        });
      } catch (error) {
        console.log("error on function addNewListCoffeUpdate", error);
        return [];
      }
    },
    [UpdataPaymentAndCoffeList]
  );

  const refundOrder = useCallback(
    (id: string) => {
      const returningOrdertOriginalSettings = (): CoffeList[] => {
        try {
          return localCoffees.map((elemento) =>
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
        } catch (error) {
          console.log(
            "erro on function returningOrdertOriginalSettings",
            error
          );
          return [];
        }
      };

      const returnOfRefundOrder = returningOrdertOriginalSettings();

      return returnOfRefundOrder;
    },
    [localCoffees]
  );
  

  const removeItemofListCoffe = useCallback(
    (id: string) => {
      try {
        const listCoffeWithoutItemRemoved = refundOrder(id).filter(
          (item) => item?.id !== id
        );
        const resultsOfNewList = calculateValuesOfCoffeForAllItens(
          listCoffeWithoutItemRemoved
        );
        UpdataPaymentAndCoffeList(resultsOfNewList, true);
        setLocalCoffees(resultsOfNewList.CoffeesInTheCart);
        setCurrentPage(1);
      } catch (error) {
        console.log("error on function removeItemofListCoffe", error);
      }
    },
    [UpdataPaymentAndCoffeList, refundOrder]
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
