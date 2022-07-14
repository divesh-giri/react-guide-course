import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalPrice = action.payload.totalPrice;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.title === newItem.title
      );
      if (itemIndex === -1) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      } else {
        state.items[itemIndex].quantity++;
        state.items[itemIndex].totalPrice += newItem.price;
        state.totalQuantity++;
      }
      state.totalAmount += newItem.price;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const indexDelItem = state.items.findIndex((item) => item.id === id);
      state.totalAmount -= state.items[indexDelItem].price;
      if (state.items[indexDelItem].quantity === 1) {
        state.totalQuantity--;
        state.items.splice(indexDelItem, 1);
      } else {
        state.items[indexDelItem].quantity--;
        state.items[indexDelItem].totalPrice -= state.items[indexDelItem].price;
        state.totalQuantity--;
      }
    },
  },
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        message: "",
        title: "Fetching Data...",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://food-order-app-c2eff-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) throw new Error("Failed to FetchData! Try Again!");

      return response.json();
    };
    try {
      const data = await fetchData();
      dispatch(cartActions.replaceCart(data));
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "",
          title: "Fetching Data Successful!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: error.message,
          title: "Error Occured",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(
        "https://food-order-app-c2eff-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            ...cartData,
          }),
        }
      );
      if (!response.ok) throw new Error("Cant send data to server, try again!");
    };

    try {
      await sendData();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data send to server, successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
