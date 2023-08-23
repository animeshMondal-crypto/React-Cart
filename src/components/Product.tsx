import { Button, Card, ButtonGroup } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useCartContext } from "../context/CartContext";
import { ProductType } from "../context/ProductsContext";

const Product = ({ id, title, images, price, rating }: ProductType) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartContext();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={images[0]}
        height="150px"
        style={{ objectFit: "contain", marginTop: "10px" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="d-flex justify-content-between align-items-baseline">
          <span className="text-muted">{rating}&#9733;</span>
          {quantity === 0 ? (
            <Button
              variant="secondary"
              onClick={() => increaseCartQuantity(id)}
            >
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <ButtonGroup>
                  <Button
                    variant="secondary"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <Button variant="secondary" disabled>
                    {quantity}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="outline-danger"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
