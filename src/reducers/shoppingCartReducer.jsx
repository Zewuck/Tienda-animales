import TYPES from "./actionTypes";
import { img } from "../assets/imagenes";

export const productsInitialState = {
  products: [
    {
      id: 1,
      img: img.dogchow,
      name: "product 1",
      price: 50,
    },
    {
      id: 2,
      img: img.collar,
      name: "product 2",
      price: 30,
    },
    {
      id: 3,
      img: img.arena,
      name: "product 3",
      price: 40,
    },
    {
      id: 4,
      img: img.raton,
      name: "product 4",
      price: 78,
    },
    {
      id: 5,
      img: img.hueso,
      name: "product 5",
      price: 90,
    },
    {
      id: 6,
      img: img.rastrillo,
      name: "product 6",
      price: 60,
    },{
      id: 7,
      img: img.dogchow,
      name: "product 7",
      price: 45,
    },
    {
      id: 8,
      img: img.collar,
      name: "product 8",
      price: 28,
    },
    {
      id: 9,
      img: img.arena,
      name: "product 9",
      price: 40,
    },
    {
      id: 10,
      img: img.raton,
      name: "product 10",
      price: 74,
    },
    {
      id: 11,
      img: img.hueso,
      name: "product 11",
      price: 92,
    },
    {
      id: 12,
      img: img.rastrillo,
      name: "product 12",
      price: 60,
    },{
      id: 13,
      img: img.dogchow,
      name: "product 13",
      price: 56,
    },
    {
      id: 14,
      img: img.collar,
      name: "product 14",
      price: 30,
    },
    {
      id: 15,
      img: img.arena,
      name: "product 15",
      price: 48,
    },
    {
      id: 16,
      img: img.raton,
      name: "product 16",
      price: 88,
    },
  ],
  cart: [],
  totalPriceShoppingCart: 0,
};

export const reducerCart = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newProduct = state.products.find(
        (product) => product.id === action.payload
      );
      return {
        ...state,
        cart: [...state.cart, newProduct],
      };
    }
    case TYPES.DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    }

    case TYPES.DELETE_ALL_FROM_CART: {
      return productsInitialState;
    }

    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce(
          (previousValue, product) => previousValue + product.price,
          0
        ),
      };
    }
    default:
      return state;
  }

  throw Error("Unknown action: " + action.type);
};
