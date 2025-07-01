import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Neviagte = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        setMessage("Password and Confirm Password do not match");
        return;
      }
      const res = await fetch("http://localhost:4000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(data.msg);
      } else {
        alert(data.msg);
      }
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setMessage("internal error");
    }
  };

  return (
    <Container
      // fluid
      // // className="bg-dark text-light d-flex justify-content-center align-items-center"
      //   className="bg-light text-dark d-flex justify-content-center align-items-center"
      // style={{ minHeight: "100vh" }}
      fluid
      className="text-dark d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#dee2e6", // Soft medium gray
      }}
    >
      <Row>
        <Col>
          <Card
            bg="dark"
            text="light"
            style={{ width: "24rem", padding: "1.5rem" }}
          >
            <h3 className="text-center mb-4">Sign Up</h3>

            {message && <Alert variant="info">{message}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary text-light border-0"
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary text-light border-0"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-secondary text-light border-0"
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="bg-secondary text-light border-0"
                />
              </Form.Group>

              <Button variant="light" type="submit" className="w-100 fw-bold">
                Sign Up
              </Button>

              <Button
                variant="light"
                onClick={() => Neviagte("/login")}
                className="w-100 fw-bold mt-3"
              >
                Sign in
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
