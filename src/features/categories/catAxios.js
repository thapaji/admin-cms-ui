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