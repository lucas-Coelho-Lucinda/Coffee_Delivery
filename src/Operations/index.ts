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
        value: calculateValuesOfCoffeForItem(newAmount, item.valueDefault),
        deliveryValue: calculateValuesOfCoffeForItem(
          newAmount,
          item.deliveryValueDefault
        ),
      };

      return updatedItem;
    } catch (error) {
      console.error("error update value of list the coffes to buy:", error);
      return item;
    }
  });

  const resultsUpdateList = calculateValuesOfCoffeForAllItens(updatedList);

  return resultsUpdateList;
};

const calculateValuesOfCoffeForItem = (
  amount: number,
  currencyValue: string
) => {
  try {
    const numericFormatValue = currencyValue
      .replace(/\s/g, "")
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".");

    const addValue = evaluate(`${numericFormatValue} * ${amount}`);

    const formatador = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
    return formatador.format(addValue);
  } catch (error) {
    console.error("error in to calcule value of coffe:", error);
    return "";
  }
};

const calculateValuesOfCoffeForAllItens = (coffeSell: CoffeList[]) => {
  try {
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
      valueTotalOfAllPayment: convertValueInCommercialCurrency(totalOfPayment),
      valueTotalOfAllItensSome: convertValueInCommercialCurrency(totalOfItems),
      valueTotalOfAllDeliveryValue:
        convertValueInCommercialCurrency(totalOfItemsDelivery),
    };
  } catch (error) {
    console.log("erro calcule value of all order requested ", error);
    return {
      CoffeesInTheCart: [],
      valueTotalOfAllPayment: "",
      valueTotalOfAllItensSome: "",
      valueTotalOfAllDeliveryValue: "",
    };
  }
};

const convertValueToNumberForCaulcule = (value: string) => {
  return parseFloat(
    value
      .replace(/\s/g, "")
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".")
  );
};

const convertValueInCommercialCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export {
  updateListOfCoffeToBuy,
  calculateValuesOfCoffeForItem,
  calculateValuesOfCoffeForAllItens,
};
