import "./ProductCard.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const ProductCard = ({ products }) => {
 
  return (
    <Row className="g-3">
      {products.map((item) => (
        <Col key={item.id} lg={4} md={6} sm={12}>
          <Card className="shadow-sm border-0 product-card">
            <Link to={`/product-details/${item.id}`}>
              <Card.Img
                variant="top"
                src={item.thumbnail}
                className="card-img-top"
                loading="lazy"
                style={{objectFit:"contain"}}
              />
            </Link>
            <Card.Body className="card-body">
              <div>
                <Card.Text className="card-title">
                  {item.title} | {item.description.slice(0, 30)}...
                </Card.Text>

                <Card.Text className="card-rating">
                  <FontAwesomeIcon icon={faStar} /> {item.rating}
                </Card.Text>

                <Card.Text className="card-price">
                  <span className="fw-bold">₹{item.price} </span>
                  <span className="text-decoration-line-through text-muted fw-semibold me-2">
                    ₹
                    {(item.price / (1 - item.discountPercentage / 100)).toFixed(
                      0
                    )}
                  </span>
                  <span
                    className="fw-bold"
                    style={{ color: "rgb(17, 197, 95)" }}
                  >
                    ({item.discountPercentage}% off)
                  </span>
                </Card.Text>

                <Card.Text className="card-price">
                  FREE {item.shippingInformation}
                </Card.Text>
              </div>

              {/* <Button className="add-to-cart" variant="primary">
                Add to Cart
              </Button> */}
             <Cart id={item.id} data={item}/>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCard;
