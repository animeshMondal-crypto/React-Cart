import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { useProductContext } from "../context/ProductsContext";
import { formatCurrency } from "../utils/formatCurrency";
const Cart = ({ isOpen }: { isOpen: boolean }) => {
  const { closeCart, cartItems } = useCartContext();
  const { products } = useProductContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        {cartItems.length > 0 ? (
          <>
            <br />
            <hr />
            <div className="d-flex justify-content-between align-items-center fw-bold fs-5">
              <span>Total</span>
              <span>
                {formatCurrency(
                  cartItems.reduce((total, currItem) => {
                    const item = products.find(
                      (item) => item.id === currItem.id
                    );
                    return total + (item?.price || 0) * currItem.quantity;
                  }, 0)
                )}
              </span>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center text-muted ">
            <h2>Cart Is Empty...</h2>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
