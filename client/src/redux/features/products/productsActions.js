import axios from "axios";
import { getProducts } from "../products/productsSlice";

export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axios("https://snykers.onrender.com/api/products");
        return dispatch(getProducts(response.data.products));
    } catch (error) {
        return error;
    }
};