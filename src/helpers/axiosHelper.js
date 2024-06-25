import axios from "axios";
import { renewAccessJWT } from "../features/users/userAxios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEp = rootAPI + "/users";

export const apiProcessor = async ({ method, url, data, isPrivate, isRefreshJWT }) => {
  const headers = isPrivate ? {
    Authorization: isRefreshJWT ? getRefreshJWT() : getAccessJWT(),
  } : null
  try {
    const response = await axios({ method, url, data, headers });
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response?.data?.message === 'jwt expired') {
      const accessJWT = await renewAccessJWT()
    }
    if (error.response?.status === 401) {
      sessionStorage.removeItem('accessJWT')
      localStorage.removeItem('refreshJWT')
    }
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
}


const getAccessJWT = () => {
  return sessionStorage.getItem('accessJWT');
}

const getRefreshJWT = () => {
  return localStorage.getItem('refreshJWT');
}
