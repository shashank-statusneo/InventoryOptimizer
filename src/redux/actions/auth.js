  import axios from "axios";
import {
  fetchLogin,
  fetchLoginSuccess,
  fetchLoginFailed,

  fetchRegister,
  fetchRegisterSuccess,
  fetchRegisterFailed
} from "../reducer/auth";

export const login = (payload) => async (dispatch) => {
  console.log("Calling action : login()");
  console.log("FetchLogin => ", fetchLogin.toString());
  await dispatch(fetchLogin());
  try {
    console.log(payload)
    console.log(process.env.REACT_APP_API_URL)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, payload);
    console.log(response.data);
    return dispatch(fetchLoginSuccess(response));
  } catch (err) {
    return dispatch(fetchLoginFailed(err));
  }
};

export const register = (payload2) => async (dispatch) => {
  console.log("Calling action : register()");
  await dispatch(fetchRegister());
  try {
    console.log(payload2)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, payload2);
    console.log(response.data);
    return dispatch(fetchRegisterSuccess(response));
  } catch (err) {
    return dispatch(fetchRegisterFailed(err));
  }
};
