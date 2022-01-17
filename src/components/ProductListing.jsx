import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { ProductComponent } from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
