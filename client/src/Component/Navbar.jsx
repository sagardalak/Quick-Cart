import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{padding:"15px",fontSize:"20px"}}>
        <Navbar.Brand as={Link} to="/home">
          QuickCart
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            cart
          </Nav.Link>
          <Nav.Link as={Link} to="/sigup">
            signup
          </Nav.Link>
        </Nav>
         <Nav.Link as={Link} to="/login">
            login
          </Nav.Link>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
