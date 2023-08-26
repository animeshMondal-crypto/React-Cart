import { useProductContext } from "../context/ProductsContext";
import Product from "./Product";
import { Col, Row } from "react-bootstrap";

const Products = () => {
  const { updateProducts, searchQuery } = useProductContext();

  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {updateProducts(searchQuery).map((product, index) => (
          <Col>
            <Product key={index} {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
