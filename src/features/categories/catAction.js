import { deleteCategory, getAllCategories, postNewCategory, updateCategory } from "./catAxios";
import { setShowModal } from "../../store/systemSlice";
import { setCategories } from "./catSlice";
import { toast } from "react-toastify";


export const createNewCategoryAction = (catData) => async (dispatch) => {
    const resp = await postNewCategory(catData);
    console.log(resp)
    dispatch(getCategoryAction())
}

export const getCategoryAction = () => async (dispatch) => {
    const { status, categories } = await getAllCategories();
    if (status === 'success') {
        dispatch(setCategories(categories))
    }
}

export const deleteCategoryAction = (catId) => async (dispatch) => {
    const resp = await deleteCategory(catId);
    dispatch(getCategoryAction())
    toast.success(resp.message);
}

export const updateCategoryAction = (catData) => async (dispatch) => {
    const resp = await updateCategory(catData);
    dispatch(getCategoryAction())
    return resp.status;
}