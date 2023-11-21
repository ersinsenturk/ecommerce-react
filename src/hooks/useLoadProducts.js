import { getProducts } from "../util/api";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/products";

export const useLoadProducts = () => {
  const dispatch = useDispatch();
  const fetchProducts = async (params) => {
    try {
      const data = await getProducts(params);

      dispatch(productsActions.setProducts(data));
    } catch (error) {
      throw new Error(error);
    }
  };

  return { fetchProducts };
};
