import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { ProductComponent } from "./ProductComponent";
import { setProducts, fetchProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  const dispatch = useDispatch();

  // commented out due to the use of redux-thunk

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
