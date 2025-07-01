import {
  Container,
  Row,
  Col,
  Badge,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RemoveToCart, RemoveToCartId } from "../redux/CartSlice";
import { SubRate } from "../redux/CartSlice";
import { Link } from "react-router-dom";
const CartPage = () => {
  const Cartdata = useSelector((state) => state.cart.cartData);
  const Rate = useSelector((state) => state.cart.Rate);
  const dispatch = useDispatch();

  function handler(i) {
    console.log("clik cart butoon");
    dispatch(RemoveToCart(i.id));
    dispatch(RemoveToCartId(i.id));
    dispatch(SubRate(i.price));
  }
  return (
    <div>
      <Container fluid className="p-4 bg-light min-vh-100">
        <h3 className="mb-4">Shopping Cart</h3>
        <Row>
          <Col lg={8}>
            <ListGroup>
              {Cartdata.map((i) => (
                <ListGroupItem
                  key={i.id}
                  className="mb-3 bg-white rounded shadow-sm"
                >
                  <Row className="align-items-center">
                    <Link to={`/product-details/${i.id}`}>
                      <Col xs={3}>
                        <img
                          src={i.thumbnail}
                          alt={i.title}
                          className="img-fluid rounded"
                          style={{ height: "100px", objectFit: "cover" }}
                        />
                      </Col>
                    </Link>
                    <Col xs={7}>
                      <h6>{i.title}</h6>
                      <h6>{i.description.slice(0, 50)}..</h6>

                      <div className="mt-2">
                        <strong>${i.price}</strong>{" "}
                        <Badge bg="warning" text="dark">
                          {i.discountPercentage}% OFF
                        </Badge>
                      </div>
                      <div className="text-success">In Stock</div>
                    </Col>
                    <Col xs={2} className="text-end">
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          handler(i);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          {Cartdata.length > 0 && (
            <Col lg={4}>
              <div className="bg-white p-4 shadow-sm rounded">
                <h5>
                  Subtotal (
                  <span className="fw-semibold">{Cartdata.length} items</span>):{" "}
                  <span className="text-success fw-bold">
                    ${Rate.toFixed(2)}
                  </span>
                </h5>
                <button
                  className="btn btn-warning fw-semibold w-100 mt-3"
                  style={{ color: "black" }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
