
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";

const ProductDetails = ({ data }) => {
  console.log("data=>", data);
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          
          <Card className="shadow">
            <Card.Img
              variant="top"
              src={data.thumbnail}
              alt="Product"
              style={{ height: "540px", objectFit: "contain" }}
            />
          </Card>
          

        </Col>

        <Col md={6}>
          <h3>{data.title}</h3>
          <h6 className="text-muted">{data.brand}</h6>

          <div className="mb-2">
            <Badge bg="success" className="me-2">
              {data.availabilityStatus}
            </Badge>
            <Badge bg="info">{data.category}</Badge>
          </div>

          <p>{data.description}</p>

          <h4 className="text-primary fw-bold">
            ${data.price}
            <span className="text-muted text-decoration-line-through fs-6">
              $70.42
            </span>{" "}
            <Badge bg="danger">{data.discountPercentage}% OFF</Badge>
          </h4>

          <ListGroup
            className="mt-3"
            variant="flush"
            style={{ border: "1px solid #dee2e6", fontSize: "0.9rem" }}
          >
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>Rating:</strong> ⭐ {data.rating}
            </ListGroup.Item>
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>Stock:</strong> {data.stock} items
            </ListGroup.Item>
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>Dimensions:</strong>
              {data.dimensions.width}W ×{data.dimensions.height}H ×
              {data.dimensions.depth}D
            </ListGroup.Item>
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>Weight:</strong> {data.weight}kg
            </ListGroup.Item>
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>Shipping:</strong> {data.shippingInformation}
            </ListGroup.Item>
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>Warranty:</strong> {data.warrantyInformation}
            </ListGroup.Item>
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>Return Policy:</strong> {data.returnPolicy}
            </ListGroup.Item>
            <ListGroup.Item style={{ borderBottom: "1px solid #dee2e6" }}>
              <strong>SKU:</strong> {data.sku}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Tags:</strong>{" "}
              <Badge bg="secondary" className="me-2">
                {data.tags[0]}
              </Badge>
              <Badge bg="secondary">{data.tags[1]}</Badge>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mg-5px" style={{marginBottom:"20px"}}>
        <Col>
          <h5 className="mt-5 mb-3">
            <span role="img" aria-label="reviews">
              📢
            </span>{" "}
            Customer Reviews
          </h5>

          <ListGroup>
            <ListGroup.Item>
              <strong>
                ⭐ {data.reviews[0].rating} –{data.reviews[0].reviewerName}
              </strong>
              <div>{data.reviews[0].comment}</div>
              <div className="text-muted small">
                {data.reviews[0].date} | {data.reviews[0].reviewerEmail}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                ⭐ {data.reviews[1].rating} –{data.reviews[1].reviewerName}
              </strong>
              <div>{data.reviews[1].comment}</div>
              <div className="text-muted small">
                {data.reviews[1].date} | {data.reviews[1].reviewerEmail}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                ⭐ {data.reviews[1].rating} –{data.reviews[1].reviewerName}
              </strong>
              <div>{data.reviews[1].comment}</div>
              <div className="text-muted small">
                {data.reviews[1].date} | {data.reviews[1].reviewerEmail}
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
