import { Navbar, Container, Button, Form } from "react-bootstrap";
import BrandIcon from "../assets/online-shop.png";
import { useCartContext } from "../context/CartContext";

const NavigationBar = () => {
  const { cartQuantity, openCart } = useCartContext();
  return (
    <Navbar className="bg-white shadow-sm mb-4" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <img
            style={{ height: "50px", width: "50px" }}
            src={BrandIcon}
            alt="Brand Image"
          />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" />
          <Button variant="outline-secondary">search</Button>
        </Form>
        <Button
          style={{ width: "3.5rem", height: "3.5rem", position: "relative" }}
          variant="outline-secondary"
          className="rounded-circle"
          onClick={openCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="cart"
          >
            <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
          </svg>
          {cartQuantity > 0 && (
            <div
              style={{
                height: "1.5rem",
                width: "1.5rem",
                position: "absolute",
                right: 0,
                bottom: 0,
                color: "white",
                transform: "translate(25%, 25%)",
              }}
              className="d-flex justify-content-center aligh-items-center rounded-circle bg-danger"
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
