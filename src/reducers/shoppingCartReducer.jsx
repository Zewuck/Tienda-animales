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
