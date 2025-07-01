import { Navigate, Route, Routes } from "react-router-dom";
import Productlist from "./Page/Productlist";
import MyNavbar from "./Component/Navbar";
import ProductDetail from "./Page/ProductDetail";
import CartPage from "./Page/CartPage";
import Login from "./Page/login";
import Signup from"./Page/signup"
import PrivateRoute from "./Component/PrivateRoute";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Routes>
           <Route path="/" element={<Login/>}  />
         <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/sigup" element={<Signup/>}  />
        <Route path="/home" element={<PrivateRoute> <Productlist /></PrivateRoute>} />
        <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>} />

        <Route path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
