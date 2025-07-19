import { useCallback, useContext, useMemo, useState } from "react";
import { defaultTheme } from "../../../sytles/themes/default";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";
import {
  AlignPagination,
  ButtonMoveRegister,
} from "./style";
import {
  ArrowFatLineRight,
  ArrowFatLineLeft,
  Trash,
} from "@phosphor-icons/react";
import {
  CalculateValuesOfCoffeForAllItens,
  handdleGeneratingCafeItemList,
} from "../../Operations";
import {
  ButtonAddAmountNegative,
  ButtonAddAmountPlus,
  CarButtonAddOrRemoveAmount,
  CardImageOptionsCoffesToSell,
  DeffaulValueToPay,
  DeliveryValue,
  DescriptionOfCoffe,
  GuidanceButtonsOptionValues,
  ItensValuesOfOrders,
  LineSepareitor,
  OrderDescritionOption,
  OrderOptionCoffesToBuy,
  RemoveShopping,
  TextAddAmount,
  TextValueOfCoffeToPay,
  TitlePageAntCountOrders,
} from "../../pages/Shopping/sytle";
import { CoffeList } from "../../Types/coffe";

interface PaginationProps {
  CoffeList: CoffeList[];
}

const ITEMS_PER_PAGE = 2;

const Pagination = ({ CoffeList }: PaginationProps) => {
  const { addedSelectedCoffeesToCart } = useContext(CoffesAddedToCartContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CoffeList.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return CoffeList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, CoffeList]);

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
      const dados = handdleGeneratingCafeItemList(coffes, id, increse);
      addedSelectedCoffeesToCart(dados.list, dados.list.length);
    },
    [addedSelectedCoffeesToCart]
  );

  const refundOrder = useCallback(
    (id: string): CoffeList[] => {
      return CoffeList.map((elemento) =>
        elemento.id === id
          ? {
              ...elemento,
              amount: 1,
              is_selected: false,
              value: elemento.valueDefault,
              deliveryValue: elemento.deliveryValueDefault,
            }
          : elemento
      );
    },
    [CoffeList]
  );

  const removeItemofListCoffe = useCallback(
    (id: string) => {
      const updatedList = refundOrder(id).filter((item) => item.id !== id);
      const resultados = CalculateValuesOfCoffeForAllItens(updatedList);
      setCurrentPage(1);
      addedSelectedCoffeesToCart(resultados.coffeSell, resultados.coffeSell.length);
    },
    [refundOrder, addedSelectedCoffeesToCart]
  );

  return (
    <>
      {currentItems.map((coffeSell, index) => (
        <div key={`${coffeSell.id}-${index}`}>
          <OrderOptionCoffesToBuy>
            <CardImageOptionsCoffesToSell>
              <img src={coffeSell.img} alt={coffeSell.title} />
            </CardImageOptionsCoffesToSell>
            <OrderDescritionOption>
              <DescriptionOfCoffe>{coffeSell.title}</DescriptionOfCoffe>
              <GuidanceButtonsOptionValues>
                <CarButtonAddOrRemoveAmount>
                  <ButtonAddAmountNegative
                    type="button"
                    onClick={() =>
                      addNewListCoffeUpdate(CoffeList, coffeSell.id, false)
                    }
                  >
                    -
                  </ButtonAddAmountNegative>
                  <TextAddAmount>{coffeSell.amount}</TextAddAmount>
                  <ButtonAddAmountPlus
                    type="button"
                    onClick={() =>
                      addNewListCoffeUpdate(CoffeList, coffeSell.id, true)
                    }
                  >
                    +
                  </ButtonAddAmountPlus>
                </CarButtonAddOrRemoveAmount>
                <RemoveShopping onClick={() => removeItemofListCoffe(coffeSell.id)}>
                  <Trash size={16} color={defaultTheme["purple-500"]} />
                  REMOVER
                </RemoveShopping>
              </GuidanceButtonsOptionValues>
            </OrderDescritionOption>
            <ItensValuesOfOrders>
              <DeffaulValueToPay>
                <p>Apartir de:</p>
                {coffeSell.valueDefault}
              </DeffaulValueToPay>
              <DeffaulValueToPay>
                <p>Frete fixo:</p>
                {coffeSell.deliveryValueDefault}
              </DeffaulValueToPay>
              <DeliveryValue>
                <p>Frete atual:</p>
                {coffeSell.deliveryValue}
              </DeliveryValue>
              <TextValueOfCoffeToPay>{coffeSell.value}</TextValueOfCoffeToPay>
            </ItensValuesOfOrders>
          </OrderOptionCoffesToBuy>
          <LineSepareitor />
        </div>
      ))}

      <AlignPagination>
        <ButtonMoveRegister type="button" enable={CoffeList.length <= 2 ? true : false} onClick={handlePreviousPage} disabled={currentPage === 1}>
          <ArrowFatLineLeft size={24} />
        </ButtonMoveRegister>

        {CoffeList.length >= 3 && (
          <TitlePageAntCountOrders>
            página: {currentPage}
          </TitlePageAntCountOrders>
        )}

        <ButtonMoveRegister type="button" enable={CoffeList.length <= 2 ? true : false} onClick={handleNextPage} disabled={currentPage === totalPages}>
          <ArrowFatLineRight size={24} />
        </ButtonMoveRegister>
      </AlignPagination>
    </>
  );
};

export default Pagination;
