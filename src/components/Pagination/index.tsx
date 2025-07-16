import { useContext, useState } from "react";
import { defaultTheme } from "../../../sytles/themes/default";
import { CoffesAddedToCartContext } from "../../context/coffesAddedToCart";
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
import { CoffeList, totalCalculeOrder } from "../../Types/coffe";
import { AlignPagination, ButtonMoveRegister } from "./style";
import {
  ArrowFatLineRight,
  ArrowFatLineLeft,
  Trash,
} from "@phosphor-icons/react";
import {
  CalculateValuesOfCoffeForAllItens,
  handdleGeneratingCafeItemList,
} from "../../Operations";

interface PaginationProps {
  CoffeList: CoffeList[];
  totalOfValueCoffe: React.Dispatch<React.SetStateAction<totalCalculeOrder>>;
}

const ITEMS_PER_PAGE = 2;

const Pagination = ({ CoffeList, totalOfValueCoffe }: PaginationProps) => {
  const { addedSelectedCoffeesToCart } = useContext(CoffesAddedToCartContext);
  const totalPages = Math.ceil(CoffeList.length / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return CoffeList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  function addNewListCoffeUpdate(
    CoffeList: CoffeList[],
    id: string,
    increse: boolean
  ) {
    const dados = handdleGeneratingCafeItemList(CoffeList, id, increse);
    totalOfValueCoffe(dados?.total);
  }

  function refundOrder(id: string) {
    CoffeList.map((elemento) => {
      if (id == elemento.id) {
        elemento.amount = 1;
        elemento.is_selected = false;
        elemento.value = elemento.value_default;
        elemento.delivery_value = elemento.delivery_value_default;
      }
      return elemento;
    });
  }

  function removeItemofListCoffe(CoffeList: CoffeList[], id: string) {
    const numero = CoffeList.findIndex((index) => index.id == id);
    refundOrder(id);
    if (numero != -1) {
      CoffeList.splice(numero, 1);
      const resultados = CalculateValuesOfCoffeForAllItens(CoffeList);
      setCurrentPage(1);
      getCurrentItems();
      totalOfValueCoffe(resultados);
      addedSelectedCoffeesToCart(resultados?.coffeSell,resultados.coffeSell.length);
    }
  }

  const pags = getCurrentItems();

  return (
    <>
      {pags.map((coffeSell) => (
        <div key={coffeSell?.id}>
          <OrderOptionCoffesToBuy>
            <CardImageOptionsCoffesToSell>
              <img src={coffeSell?.img} alt={coffeSell?.title} />
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
                  <TextAddAmount>{coffeSell.amount}</TextAddAmount>
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
                  onClick={() =>
                    removeItemofListCoffe(CoffeList, coffeSell?.id)
                  }
                >
                  <Trash size={16} color={defaultTheme["purple-500"]} />
                  REMOVER
                </RemoveShopping>
              </GuidanceButtonsOptionValues>
            </OrderDescritionOption>
            <ItensValuesOfOrders>
              <DeffaulValueToPay>
                <p>Apartir de:</p>
                {coffeSell.value_default}
              </DeffaulValueToPay>
              <DeffaulValueToPay>
                <p>Frete fixo:</p>
                {coffeSell.delivery_value_default}
              </DeffaulValueToPay>
              <DeliveryValue>
                 <p>Frete atual:</p>
                {coffeSell.delivery_value}
              </DeliveryValue>
              <TextValueOfCoffeToPay>{coffeSell.value}</TextValueOfCoffeToPay>
            </ItensValuesOfOrders>
          </OrderOptionCoffesToBuy>
          <LineSepareitor />
        </div>
      ))}

      <AlignPagination>
        <ButtonMoveRegister
           type="button"
          onClick={handlePreviousPage}
          enable={CoffeList.length <= 2 ? true : false}
        >
          <ArrowFatLineLeft size={24} />
        </ButtonMoveRegister>
        <TitlePageAntCountOrders>
          {CoffeList.length >= 3 ? `página:   ${currentPage }`: ""}
        </TitlePageAntCountOrders>
        <ButtonMoveRegister type="button" onClick={handleNextPage}  enable={CoffeList.length <= 2 ? true : false}>
          <ArrowFatLineRight size={24} />
        </ButtonMoveRegister>
      </AlignPagination>
    </>
  );
};

export default Pagination;
