import { NOTIFICATION_TYPES } from "./notification.types";

const initialState = {
    notifications: [],
    loading: false,
    error: null,
    success: false,
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION_TYPES.GET_NOTIFICATIONS_START:
            return { ...state, loading: true };
        case NOTIFICATION_TYPES.GET_NOTIFICATIONS_SUCCESS:
            return { ...state, notifications: action.payload, loading: false, success: true };
        case NOTIFICATION_TYPES.GET_NOTIFICATIONS_ERROR:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
};

export default notificationReducer;