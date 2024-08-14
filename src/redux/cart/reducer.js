import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      //verifica se o produto ja esta no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      //se ele estiver aumentar a quantidade em 1

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
