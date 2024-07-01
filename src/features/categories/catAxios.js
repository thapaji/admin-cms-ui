import axios from "axios";
import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const catEP = rootAPI + "/categories";


export const postNewCategory = async (catObj) => {
    const axiosObj = { method: 'POST', url: catEP, data: catObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const getAllCategories = async () => {
    const axiosObj = { method: 'GET', url: catEP, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const deleteCategory = async (catId) => {
    const axiosObj = { method: 'DELETE', url: `${catEP}/${catId}`, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const updateCategory = async (catObj) => {
    const axiosObj = { method: 'PUT', url: `${catEP}/${catObj._id}`, data: catObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};