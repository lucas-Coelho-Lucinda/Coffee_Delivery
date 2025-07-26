import { evaluate } from "mathjs";
import { CoffeList } from "../Types/coffe";

const updateListOfCoffeToBuy = (
  coffeSell: CoffeList[],
  idCoffeSelected: string,
  increase: boolean
) => {
  const updatedList = coffeSell.map((item) => {
    if (item.id !== idCoffeSelected) return item;

    try {
      let newAmount = increase ? item.amount + 1 : item.amount - 1;
      if (newAmount <= 0) newAmount = 1;

      const updatedItem = {
        ...item,
        amount: newAmount,
        value: CalculateValuesOfCoffeForItem(
          { ...item, amount: newAmount },
          true
        ),
        deliveryValue: CalculateValuesDeliveryOfCoffeForItem(
          { ...item, amount: newAmount },
          true
        ),
      };

      return updatedItem;
    } catch (error) {
      console.error("Erro ao avaliar expressão matemática:", error);
      return item;
    }
  });

  return {
    list: updatedList,
  };
};

const CalculateValuesOfCoffeForItem = (
  coffeSell: CoffeList,
  multiply: boolean
) => {
  const valor = coffeSell.valueDefault
    .replace(/\s/g, "") // remove espaços
    .replace("R$", "") // remove símbolo
    .replace(/\./g, "") // remove pontos de milhar
    .replace(",", ".");

  const addValue = multiply
    ? evaluate(`${valor} * ${coffeSell.amount}`)
    : evaluate(`${valor}`);

  const formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatador.format(addValue);
};
const CalculateValuesDeliveryOfCoffeForItem = (
  coffeSell: CoffeList,
  multiply: boolean
) => {
  const valorOpcaoDelivery = coffeSell.deliveryValueDefault
    .replace(/\s/g, "")
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".");

  const addValueDelivery = multiply
    ? evaluate(`${valorOpcaoDelivery} * ${coffeSell.amount}`)
    : evaluate(`${valorOpcaoDelivery}`);

  const formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatador.format(addValueDelivery);
};

function convertValueToNumberForCaulcule(value: string) {
  return parseFloat(
    value
      .replace(/\s/g, "")
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".")
  );
}

function convertValueInCommercialCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const CalculateValuesOfCoffeForAllItens = (coffeSell: CoffeList[]) => {
  let totalOfItems = 0;
  let totalOfPayment = 0;
  let totalOfItemsDelivery = 0;

  for (let i = 0; i < coffeSell?.length; i++) {
    const valueOfCoffe = convertValueToNumberForCaulcule(coffeSell[i]?.value);
    const valueOfDeliveryValue = convertValueToNumberForCaulcule(
      coffeSell[i]?.deliveryValue
    );
    const calcule = valueOfCoffe;
    totalOfItems += calcule;

    const calculeDelivery = valueOfDeliveryValue;
    totalOfItemsDelivery += calculeDelivery;

    const calculePayment = calcule + calculeDelivery;
    totalOfPayment += calculePayment;
  }

  return {
    CoffeesInTheCart: coffeSell,
    haveNoMoreCoffesToBuy: !coffeSell.length,
    valueTotalOfAllPayment: convertValueInCommercialCurrency(totalOfPayment),
    valueTotalOfAllItensSome: convertValueInCommercialCurrency(totalOfItems),
    valueTotalOfAllDeliveryValue:
      convertValueInCommercialCurrency(totalOfItemsDelivery),
  };
};

export {
  updateListOfCoffeToBuy,
  CalculateValuesOfCoffeForItem,
  CalculateValuesOfCoffeForAllItens,
  CalculateValuesDeliveryOfCoffeForItem,
};
