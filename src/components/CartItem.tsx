import { Button, ButtonGroup, Stack } from "react-bootstrap";
import { CartItemtype, useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductsContext";
import { formatCurrency } from "../utils/formatCurrency";

const CartItem = ({ id, quantity }: CartItemtype) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useCartContext();
  const { products } = useProductContext();

  const item = products.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        style={{ height: "75px", width: "100px", objectFit: "contain" }}
        src={item.images[0]}
        alt={item.title}
      />
      <div className="me-auto">
        <div style={{ fontSize: "1rem" }}>
          {item.title.length > 25
            ? `${item.title.split(" ")[0]} ...`
            : item.title}
        </div>
        <div className="text-muted mb-2" style={{ fontSize: ".85rem" }}>
          {formatCurrency(item.price)}
        </div>
        <div>
          {quantity && (
            <ButtonGroup size="sm">
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
          )}
        </div>
      </div>
      <div style={{ fontSize: ".85remrem" }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button variant="outline-secondary" onClick={() => removeFromCart(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
