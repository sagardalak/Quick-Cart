export const fetchProducts = async ({ skip, limit = 10 }) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=discountPercentage,description,thumbnail,title,rating,price,discountPercentage,shippingInformation`
    );
    const data = await res.json();
    return data.products;
  } catch (e) {
    console.log("error =>", e);
  }
};

export const fetchProduct = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("error =>", e);
  }
};
