import BackendSDK from "@/BackendSDK";
import axios from "axios";

const { USER_TYPES } = require("./user.types");

export const loginAction = (data) => async dispatch => {
  dispatch({type:USER_TYPES.LOGIN_START});
  try {
    
    const response = await axios.post(`${BackendSDK.url}/users/login`, data);
    localStorage.setItem("token", response.data.token);

    dispatch({
      type: USER_TYPES.LOGIN_SUCCESS,
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_TYPES.LOGIN_ERROR,
      payload: error.response.data.message,
    });
  }
}

export const checkUserSession = () => async (dispatch) => {
  dispatch({ type: USER_TYPES.GET_PROFILE_START });
  try {
    const token = window.localStorage.getItem("token");
    if (token) {
      const res = await axios.get(`${BackendSDK.url}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: USER_TYPES.GET_PROFILE_SUCCESS,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_TYPES.GET_PROFILE_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const registerAction = (data) => async dispatch => {
  dispatch({type:USER_TYPES.REGISTER_START});
  try {
    const response = await axios.post(`${BackendSDK.url}/users/register`, data);
    localStorage.setItem("token", response.data.token);

    dispatch({
      type: USER_TYPES.REGISTER_SUCCESS,
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_TYPES.REGISTER_ERROR,
      payload: error.response.data.message,
    });
  }
}

export const forgotPasswordAction = (data) => async dispatch => {
  dispatch({type:USER_TYPES.FORGOT_PASSWORD_START});
  try {
    const response = await axios.post(`${BackendSDK.url}/users/forgot-password`, data);
    dispatch({
      type: USER_TYPES.FORGOT_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: USER_TYPES.FORGOT_PASSWORD_ERROR,
      payload: error.response.data.message,
    });
  }
}

export const resetPasswordAction = (data) => async dispatch => {
  dispatch({type:USER_TYPES.RESET_PASSWORD_START});
  try {
    const response = await axios.post(`${BackendSDK.url}/users/reset-password`, data);
    dispatch({
      type: USER_TYPES.RESET_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: USER_TYPES.RESET_PASSWORD_ERROR,
      payload: error.response.data.message,
    });
  }
}

export const updateProfileAction = (data) => async dispatch => {
  dispatch({type:USER_TYPES.UPDATE_PROFILE_START});
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.put(`${BackendSDK.url}/users/Updateprofile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: USER_TYPES.UPDATE_PROFILE_SUCCESS,
      payload: response.data.user,
    });
    
  } catch (error) {
    dispatch({
      type: USER_TYPES.UPDATE_PROFILE_ERROR,
      payload: error.response.data.message,
    });
  }
}

export const getAllUsers = () => async dispatch => {
  dispatch({type:USER_TYPES.GET_USERS_START});
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.get(`${BackendSDK.url}/users/getAll`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: USER_TYPES.GET_USERS_SUCCESS,
      payload: response.data.users,
    });
  } catch (error) {
    dispatch({
      type: USER_TYPES.GET_USERS_ERROR,
      payload: error.response.data.message,
    });
  }
}
export const getOneUser = ({user_id}) => async dispatch => {
  dispatch({type:USER_TYPES.GET_USER_START});
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.get(`${BackendSDK.url}/users/one/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: USER_TYPES.GET_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: USER_TYPES.GET_USER_ERROR,
      payload: error.response.data.message,
    });
  }
}