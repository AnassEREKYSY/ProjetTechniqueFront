const initialState = {
    user: null,
    loading: false,
    error: null,
    success: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return { ...state, loading: true };
        case "LOGIN_SUCCESS":
            return { ...state, user: action.payload, loading: false, success: true };
        case "LOGIN_ERROR":
            return { ...state, error: action.payload, loading: false };
        case "LOGOUT":
            return { ...state, user: null, success: false };
        case "RESET_ERROR":
            return { ...state, error: null };
        case "RESET_SUCCESS":
            return { ...state, success: false };
        default:
            return state;
    }
}

export default userReducer;