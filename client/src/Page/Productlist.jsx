import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Network/products";
import { ClipLoader } from "react-spinners";
import ProductCard from "../Component/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  setProduct,
  increaseSkip,
  setMore,
  setLoad,
} from "../redux/ProductSlice";

const Productlist = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const skip = useSelector((state) => state.product.skip);
  const load = useSelector((state) => state.product.load);
  const more = useSelector((state) => state.product.more);

  const fetchdata = async () => {


    try {
      dispatch(setLoad(true));
      const data = await fetchProducts({ skip });

      if (data.length === 0) {
        dispatch(setMore(false));
        return;
      }

      dispatch(setProduct(data));
      dispatch(increaseSkip(10));
    } catch (e) {
      console.log("Fetch error:", e);
    } finally {
      dispatch(setLoad(false));
    }
  };

  useEffect(() => {
        if (!(products.length < 10)) return;
    fetchdata();
  }, []);

  console.log("object", { products, load, skip });

  return (
    <div>
      {load ? (
        <ClipLoader
          loading={load}
          size={150}
          cssOverride={{
            display: "flex",
            margin: "25% auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchdata}
          hasMore={more}
          loader={
            <ClipLoader
              loading={load}
              size={150}
              cssOverride={{
                display: "flex",
                margin: "0% 25%",
                justifyContent: "center",
              }}
            />
          }
        >
          <ProductCard products={products} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Productlist;
