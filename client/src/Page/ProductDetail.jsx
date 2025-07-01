import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Productdetail from "../Component/Productdetail";
import { setSelectProduct } from "../redux/ProductSlice";
import { fetchProduct } from "../Network/products";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectProduct = useSelector((state) => state.product.selectProduct);

  const fetchdetail = async (id) => {
    try {
      const data = await fetchProduct(id);
      dispatch(setSelectProduct(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdetail(id);
  }, [id]);
console.log("select product=>",selectProduct)
  return <div>{selectProduct && <Productdetail data={selectProduct} />}</div>;
}
