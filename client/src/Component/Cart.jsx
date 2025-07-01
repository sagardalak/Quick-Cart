import { Button } from "react-bootstrap";
import {
  AddToCart,
  AddToCartId,
  RemoveToCartId,
  RemoveToCart,
  AddRate,
  SubRate
  
} from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const Cart = ({ id, data }) => {
  const dispatch = useDispatch();
  const cartId = useSelector((state) => state.cart.cartId);
  const [change, setChange] = useState(function () {
    return cartId.some((cartItemId) => cartItemId === id);
  });

  function handler(id, data) {
    const key = cartId.find((i) => i === id);
    if (!key) {
      dispatch(AddToCartId(id));
      dispatch(AddToCart(data));
      dispatch(AddRate(data.price))
    } else {
      dispatch(RemoveToCartId(id));
      dispatch(RemoveToCart(id));
       dispatch(SubRate(data.price))
    }
    setChange(!change);
  }

  return (
    <div>
      <Button variant="warning"  style={{width:"100%", backgroundColor: change ? "rgba(255,0,0,0.4)" : undefined, color: 'black', border: 'none' }} onClick={() => handler(id, data)}>
        {change ? "remove to Cart" : "Add to cart"}
      </Button>
    </div>
  );
};

export default Cart;
