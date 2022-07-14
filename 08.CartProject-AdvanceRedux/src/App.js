import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { fetchData, sendCartData } from "./store/cart-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;
function App() {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cartData));
  }, [cartData, dispatch]);
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  return (
    <>
      <Notification />
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
