import { useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts, getSingleProduct, postNewProduct, updateProduct } from "./productAxios";
import { setProducts } from "./productSlice";
import { toast } from "react-toastify";

export const createNewProductAction = (productData) => async (dispatch) => {
    const { status, message } = await postNewProduct(productData);
    toast[status](message);
    if (status === 'success') {

        dispatch(getProductAction())
    }
    return status;
}

export const getProductAction = () => async (dispatch) => {
    const { status, products } = await getAllProducts();
    if (status === 'success') {
        dispatch(setProducts(products))
    }
}

export const deleteProductAction = (productId) => async (dispatch) => {
    const resp = await deleteProduct(productId);
    dispatch(getProductAction())
    toast.success(resp.message);
}

export const updateProductAction = (productData) => async (dispatch) => {
    const { status, message } = await updateProduct(productData);
    toast[status](message);
    if (status === 'success') {
        dispatch(getProductAction())
    }
    return status;
}

export const getSingleProductAction = async (productId) => {
    const resp = await getSingleProduct(productId);
    return resp.status = 'success' ? resp.product : {}
}