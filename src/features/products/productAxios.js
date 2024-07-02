import axios from "axios";
import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const productEP = rootAPI + "/products";


export const postNewProduct = async (productObj) => {
    const axiosObj = { method: 'POST', url: productEP, data: productObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const getAllProducts = async () => {
    const axiosObj = { method: 'GET', url: productEP, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const deleteProduct = async (catId) => {
    const axiosObj = { method: 'DELETE', url: `${productEP}/${catId}`, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const updateProduct = async (productObj) => {
    const axiosObj = { method: 'PUT', url: `${productEP}/${productObj._id}`, data: productObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const getSingleProduct = async (productId) => {
    const axiosObj = { method: 'GET', url: `${productEP}/${productId}`, isPrivate: true };
    return await apiProcessor(axiosObj);
};