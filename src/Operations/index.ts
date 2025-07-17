import { evaluate } from "mathjs";
import { CoffeList } from "../Types/coffe";

const handdleGeneratingCafeItemList = (
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
        value: CalculateValuesOfCoffeForItem({ ...item, amount: newAmount }, true),
        deliveryValue: CalculateValuesDeliveryOfCoffeForItem({ ...item, amount: newAmount }, true),
      };

      return updatedItem;
    } catch (error) {
      console.error("Erro ao avaliar expressão matemática:", error);
      return item;
    }
  });

  const total = CalculateValuesOfCoffeForAllItens(updatedList);

  return {
    list: updatedList,
    total,
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
    .replace(/\s/g, "") // remove espaços
    .replace("R$", "") // remove símbolo
    .replace(/\./g, "") // remove pontos de milhar
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

const CalculateValuesOfCoffeForAllItens = (coffeSell: CoffeList[]) => {
  let totalOfItems = 0;
  let totalOfPayment = 0;
  let totalOfItemsDelivery = 0;
  let valueTotalOfAllItensSome = "";
  let valueTotalOfAllDeliveryValue = "";
  let valueTotalOfAllPayment = "";
  coffeSell.forEach((item) => {
    const valueOfCoffe = parseFloat(
      item?.value
        .replace(/\s/g, "") // remove espaços
        .replace("R$", "") // remove símbolo
        .replace(/\./g, "") // remove pontos de milhar
        .replace(",", ".")
    );
    const valueOfDeliveryValue = parseFloat(
      item?.deliveryValue
        .replace(/\s/g, "") // remove espaços
        .replace("R$", "") // remove símbolo
        .replace(/\./g, "") // remove pontos de milhar
        .replace(",", ".")
    );
    const calcule = valueOfCoffe;
    totalOfItems += calcule;

    const calculeDelivery = valueOfDeliveryValue;
    totalOfItemsDelivery += calculeDelivery;

    const calculePayment = calcule + calculeDelivery;
    totalOfPayment += calculePayment;

    const valueTotalOfAllItens = totalOfItems.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const valueTotalOfAllItensDelivery = totalOfItemsDelivery.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    );

    const valueTotalOfAllItensPayment = totalOfPayment.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    valueTotalOfAllItensSome = valueTotalOfAllItens;

    valueTotalOfAllDeliveryValue = valueTotalOfAllItensDelivery;

    valueTotalOfAllPayment = valueTotalOfAllItensPayment;
  });

  return {
    coffeSell: coffeSell,
    valueTotalOfAllPayment: valueTotalOfAllPayment,
    valueTotalOfAllItensSome: valueTotalOfAllItensSome,
    valueTotalOfAllDeliveryValue: valueTotalOfAllDeliveryValue,
  };
};

export {
  handdleGeneratingCafeItemList,
  CalculateValuesOfCoffeForItem,
  CalculateValuesOfCoffeForAllItens,
  CalculateValuesDeliveryOfCoffeForItem,
};
