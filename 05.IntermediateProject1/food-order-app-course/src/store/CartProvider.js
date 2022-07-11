import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const indx = state.items.findIndex((item) => item.id === action.item.id);
    if (indx === -1) {
      return {
        items: [...state.items, action.item],
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    } else {
      return {
        items: state.items.map((item) => {
          if (item.id === action.item.id)
            return {
              ...item,
              amount: item.amount + action.item.amount,
            };
          return item;
        }),
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartStateAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartStateAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {};
  useReducer();
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
