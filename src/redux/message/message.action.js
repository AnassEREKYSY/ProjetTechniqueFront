import axios from "axios";
import { MESSAGE_TYPES } from "./message.types";
import BackendSDK from "@/BackendSDK";


export const getMessages = () => async dispatch => {
    dispatch({type: MESSAGE_TYPES.GET_MESSAGES_START});
    try {
        const response = await axios.get(`${BackendSDK.url}/messages/userMessages`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: MESSAGE_TYPES.GET_MESSAGES_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: MESSAGE_TYPES.GET_MESSAGES_ERROR,
            payload: error.response ? error.response.data.message : error.message
        });
    }
}

export const createMessage = (data) => async dispatch => {
    dispatch({type: MESSAGE_TYPES.CREATE_MESSAGE_START});
    try {
        const response = await axios.post(`${BackendSDK.url}/messages/sendMessage/${data.receiver.id}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: MESSAGE_TYPES.CREATE_MESSAGE_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: MESSAGE_TYPES.CREATE_MESSAGE_ERROR,
            payload: error.response ? error.response.data.message : error.message
        });
    }
}