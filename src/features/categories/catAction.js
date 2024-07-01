import { getAllCategories, postNewCategory } from "./catAxios";
import { setShowModal } from "../../store/systemSlice";
import { setCategories } from "./catSlice";


export const createNewCategoryAction = (catData) => async (dispatch) => {
    const resp = await postNewCategory(catData);
    console.log(resp)
    dispatch(setShowModal(false))
}

export const getCategoryAction = () => async (dispatch) => {
    const { status, categories } = await getAllCategories();
    if (status === 'success') {
        dispatch(setCategories(categories))
    }
}