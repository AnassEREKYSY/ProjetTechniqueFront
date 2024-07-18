import { MESSAGE_TYPES } from "./message.types";

const initialState = {
    messages:[],
    loading: false,
    error: null,
    success: false,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_TYPES.GET_MESSAGES_START:
            return { ...state, loading: true };
        case MESSAGE_TYPES.GET_MESSAGES_SUCCESS:
            return { ...state, messages: action.payload, loading: false };
        case MESSAGE_TYPES.GET_MESSAGES_ERROR:
            return { ...state, error: action.payload, loading: false };

        case MESSAGE_TYPES.CREATE_MESSAGE_START:
            return { ...state, loading: true };
        case MESSAGE_TYPES.CREATE_MESSAGE_SUCCESS:
            return { ...state, messages: [action.payload, ...state.messages], loading: false, success: true };
        case MESSAGE_TYPES.CREATE_MESSAGE_ERROR:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
};

export default messageReducer;