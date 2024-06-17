import { toast } from "react-toastify";
import { fetchUserInfo, loginUser, postNewUser } from "./userAxios";
import { setUser } from "./userSlice";
import { renewAccessJWT } from "../../helpers/axiosHelper";

export const apiProcesserWITHTOAST = async (obj, func) => {
    const pending = func(obj);
    toast.promise(pending, { pending: 'Please Wait...' })
    const response = await pending;
    toast[response.status](response.message);
    return response
}

export const createNewAdminAction = async (userData) => {
    apiProcesserWITHTOAST(userData, postNewUser);
}

/********************** Refactor later **************************/

export const getUserObj = () => async (dispatch) => {
    const { status, user } = await fetchUserInfo();
    // console.log(status, user);

    /***** update store ****/
    dispatch(setUser(user))
}

export const login = async (dispatch, login) => {
    const pending = loginUser(login);
    toast.promise(pending, { pending: 'Please Wait...' })
    const { status, message, tokens } = await pending;
    toast[status](message);
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);
    if (status === "success") {
        dispatch(getUserObj());
    }
    return status;
}

export const autoLogin = () => async (dispatch) => {
    const accessJWT = sessionStorage.getItem("accessJWT");
    const refreshJWT = localStorage.getItem("refreshJWT");
    /********** When access JWt Exists ************/
    if (accessJWT) {
        dispatch(getUserObj());
        return;
    }
    /********** When accessJWT do not exist but refreshJWt Exists ************/
    if (refreshJWT) {
        const token = await renewAccessJWT();
        token && dispatch(getUserObj())
    }
}