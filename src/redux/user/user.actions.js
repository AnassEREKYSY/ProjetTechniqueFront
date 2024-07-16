const { USER_TYPES } = require("./user.types");


export const loginAction = (data) => dispatch => {
  dispatch(USER_TYPES.LOGIN_START);
  axios.post("/auth/login", data)
    .then(res => {
      dispatch({ type:USER_TYPES.LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type:USER_TYPES.LOGIN_ERROR, payload: err.response.data });
    });
}