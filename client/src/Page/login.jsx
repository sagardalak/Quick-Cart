import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { setFormData } from "../redux/FormSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("data=>", data);
      if (data.success) {
        setMessage(data.msg);
        dispatch(setFormData(data.user.name));
        navigate("/home");
      } else {
        setMessage(data.msg);
      }
    } catch (err) {
      setMessage("Server error ❗");
    }
  };

  return (
    <Container
      // fluid
      // className="bg-dark text-light d-flex justify-content-center align-items-center"
      // style={{ minHeight: '100vh' }}
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
            <h3 className="text-center mb-4">Login</h3>

            {message && <Alert variant="info">{message}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary text-light border-0"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="bg-secondary text-light border-0"
                />
              </Form.Group>

              <Button variant="light" type="submit" className="w-100 fw-bold">
                Login
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
