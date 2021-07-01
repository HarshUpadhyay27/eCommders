import React, { useEffect } from "react";
import ProductScreen from "./ProductScreen";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../reudux/actions/porducts/productAction";

const HomeScreen = () => {
  const productList = useSelector(state => state.productList)
  const {loading, products, error} = productList
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProduct())
  }, [dispatch]);
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products &&
          products.map((product) => <ProductScreen product={product} />)}
      </div>
    </>
  );
};

export default HomeScreen;
