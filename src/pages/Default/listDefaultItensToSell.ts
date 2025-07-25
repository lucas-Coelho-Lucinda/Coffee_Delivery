import { v4 as uuidv4 } from "uuid";

export const listDefaultItensToSell = [
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/expresso_Tradicional.png",
    value: "R$ 9,90",
    valueDefault: "R$ 9,90",
    deliveryValue: "R$ 3,50",
    deliveryValueDefault: "R$ 3,50",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "TRADICIONAL" }
    ],
    title: "Expresso Tradicional",
    subTitles: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/expresso_americano.png",
    value: "R$ 20,40",
    valueDefault: "R$ 20,40",
    deliveryValue: "R$ 4,20",
    deliveryValueDefault: "R$ 4,20",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [{ id: uuidv4(), adjective: "TRADICIONAL" }],
    title: "Expresso Americano",
    subTitles: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/expresso_cremoso.png",
    value: "R$ 16,75",
    valueDefault: "R$ 16,75",
    deliveryValue: "R$ 3,90",
    deliveryValueDefault: "R$ 3,90",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [{ id: uuidv4(), adjective: "TRADICIONAL" }],
    title: "Expresso cremoso",
    subTitles: "Café expresso tradicional com espuma cremosa",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/expresso_gelado.png",
    value: "R$ 10,25",
    valueDefault: "R$ 10,25",
    deliveryValue: "R$ 4,10",
    deliveryValueDefault: "R$ 4,10",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "TRADICIONAL" },
      { id: uuidv4(), adjective: "GELADO" },
    ],
    title: "Expresso Gelado",
    subTitles: "Bebida preparada com café expresso e cubos de gelo",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/cafe_com_leite.png",
    value: "R$ 19,90",
    valueDefault: "R$ 19,90",
    deliveryValue: "R$ 5,50",
    deliveryValueDefault: "R$ 5,50",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "TRADICIONAL" },
      { id: uuidv4(), adjective: "COM LEITE" },
    ],
    title: "Café com Leite",
    subTitles: "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/latte.png",
    value: "R$ 30,45",
    valueDefault: "R$ 30,45",
    deliveryValue: "R$ 6,20",
    deliveryValueDefault: "R$ 6,20",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "TRADICIONAL" },
      { id: uuidv4(), adjective: "COM LEITE" },
    ],
    title: "Latte",
    subTitles:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/capuccino.png",
    value: "R$ 40,20",
    valueDefault: "R$ 40,20",
    deliveryValue: "R$ 7,10",
    deliveryValueDefault: "R$ 7,10",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "TRADICIONAL" },
      { id: uuidv4(), adjective: "COM LEITE" },
    ],
    title: "Capuccino",
    subTitles:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/macchiato.png",
    value: "R$ 15,35",
    valueDefault: "R$ 15,35",
    deliveryValue: "R$ 4,80",
    deliveryValueDefault: "R$ 4,80",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "TRADICIONAL" },
      { id: uuidv4(), adjective: "COM LEITE" },
    ],
    title: "Macchiato",
    subTitles: "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/mocaccino.png",
    value: "R$ 14,35",
    valueDefault: "R$ 14,35",
    deliveryValue: "R$ 4,50",
    deliveryValueDefault: "R$ 4,50",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "TRADICIONAL" },
      { id: uuidv4(), adjective: "COM LEITE" },
    ],
    title: "Mocaccino",
    subTitles: "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/chocolate_quente.png",
    value: "R$ 30,50",
    valueDefault: "R$ 30,50",
    deliveryValue: "R$ 6,90",
    deliveryValueDefault: "R$ 6,90",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "ESPECIAL" },
      { id: uuidv4(), adjective: "COM LEITE" },
    ],
    title: "Chocolate Quente",
    subTitles: "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/cubano.png",
    value: "R$ 80,90",
    valueDefault: "R$ 80,90",
    deliveryValue: "R$ 9,80",
    deliveryValueDefault: "R$ 9,80",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "ESPECIAL" },
      { id: uuidv4(), adjective: "ALCOÓLICO" },
      { id: uuidv4(), adjective: "GELADO" },
    ],
    title: "Cubano",
    subTitles:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/Arabe.png",
    value: "R$ 95,90",
    valueDefault: "R$ 95,90",
    deliveryValue: "R$ 10,90",
    deliveryValueDefault: "R$ 10,90",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [{ id: uuidv4(), adjective: "ESPECIAL" }],
    title: "Árabe",
    subTitles: "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    id: uuidv4(),
    img: "/src/assets/CoffePhotos/irlandes.png",
    value: "R$ 100,00",
    valueDefault: "R$ 100,00",
    deliveryValue: "R$ 11,50",
    deliveryValueDefault: "R$ 11,50",
    amount: 1,
    is_selected: false,
    coffeeCharacteristics: [
      { id: uuidv4(), adjective: "ESPECIAL" },
      { id: uuidv4(), adjective: "ALCOÓLICO" },
    ],
    title: "Irlandês",
    subTitles: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];
