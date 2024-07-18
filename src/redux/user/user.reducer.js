const { USER_TYPES } = require("./user.types");

const initialState = {
    profile: null,
    loading: false,
    error: null,
    success: false,
    users:[],
    profile_loading: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES.LOGIN_START:
            return { ...state, loading: true };
        case USER_TYPES.LOGIN_SUCCESS:
            return { ...state, profile: action.payload, loading: false, success: true };
        case USER_TYPES.LOGIN_ERROR:
            return { ...state, error: action.payload, loading: false };
        case USER_TYPES.LOGOUT:
            return { ...state, profile: null, success: false };
        case USER_TYPES.RESET_ERROR:
            return { ...state, error: null, profile_error: null, profile_loading: false , loading:false, loading_forgot_password: false, forgot_password_success: false , loading_reset_password: false, reset_password_success: false, reset_password_error: null };
        case USER_TYPES.RESET_SUCCESS:
            return { ...state, success: false, forgot_password_success:false };
        case USER_TYPES.GET_PROFILE_START:
            return { ...state, profile_loading: true , profile_error: null};

        case USER_TYPES.GET_PROFILE_SUCCESS:
            return { ...state, profile: action.payload, profile_loading: false, profile_error: null };
        
        case USER_TYPES.GET_PROFILE_FAILURE:
            return { ...state, profile_error: action.payload, profile_loading: false, profile: null };

        case USER_TYPES.REGISTER_START:
            return { ...state, loading: true };
        case USER_TYPES.REGISTER_SUCCESS:
            return { ...state, profile: action.payload, loading: false, success: true };
        case USER_TYPES.REGISTER_ERROR:
            return { ...state, error: action.payload, loading: false };

        case USER_TYPES.FORGOT_PASSWORD_START :
            return { ...state, loading_forgot_password: true };
        case USER_TYPES.FORGOT_PASSWORD_SUCCESS :
            return { ...state, loading_forgot_password: false, forgot_password_success: true };
        case USER_TYPES.FORGOT_PASSWORD_ERROR :
            return { ...state, error: action.payload, loading_forgot_password: false };

        case USER_TYPES.RESET_PASSWORD_START :
            return { ...state, loading_reset_password: true };
        case USER_TYPES.RESET_PASSWORD_SUCCESS :
            return { ...state, loading_reset_password: false, reset_password_success: true };
        case USER_TYPES.RESET_PASSWORD_ERROR :
            return { ...state, reset_password_error: action.payload, loading_reset_password: false };
        
        case USER_TYPES.UPDATE_PROFILE_START:
            return { ...state, loading: true,profile_update_success:false };
        case USER_TYPES.UPDATE_PROFILE_SUCCESS:
            return { ...state, loading: false, profile_update_success: true };
        case USER_TYPES.UPDATE_PROFILE_ERROR:
            return { ...state, error: action.payload, loading: false,profile_update_success:false };
        
        case USER_TYPES.GET_USERS_START:
            return { ...state, loading: true };
        case USER_TYPES.GET_USERS_SUCCESS:
            return { ...state, users: action.payload, loading: false };
        case USER_TYPES.GET_USERS_ERROR:
            return { ...state, error: action.payload, loading: false };
            
        case USER_TYPES.GET_USER_START:
            return { ...state, loading: true };
        case USER_TYPES.GET_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case USER_TYPES.GET_USER_ERROR:
            return { ...state, error: action.payload, loading: false };


        default:
            return state;
    }
}

export default userReducer;

            