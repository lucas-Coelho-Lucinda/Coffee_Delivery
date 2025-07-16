import { CoffeList } from "../../Types/coffe";

export interface propsCoffeCard {
  coffe: CoffeList;
  onAdd: (idCoffeSelected: string) => void;
  onChangeAmount: (idCoffeSelected: string, increase: boolean) => void;
}


export interface OptionOfMenuProps {
  optionSelected: boolean;
}

export interface propsPriceContainerOnCoffee {
  color: string;
  background: string;
}

export interface propsIconBottom {
  color: string;
}