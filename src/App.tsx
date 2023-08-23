import { Container } from "react-bootstrap";
import Products from "./components/Products";
import ProductsContextProvider from "./context/ProductsContext";
import NavigationBar from "./components/NavigationBar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ProductsContextProvider>
      <CartProvider>
        <NavigationBar />
        <Container className="mb-5">
          <Products />
        </Container>
      </CartProvider>
    </ProductsContextProvider>
  );
}

export default App;
