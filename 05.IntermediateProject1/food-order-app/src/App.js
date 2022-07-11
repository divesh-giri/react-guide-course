import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import NavBar from "./components/NavigationBar/NavBar";
import CartContext from "./store/cart-context";

function App() {
  return (
    <CartContext.Provider value={{ data: [] }}>
      <NavBar />
      <MainHeader />
    </CartContext.Provider>
  );
}

export default App;
