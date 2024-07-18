import axios from "axios";
import { NOTIFICATION_TYPES } from "./notification.types";
import BackendSDK from "@/BackendSDK";


//need to fix security
export const getNotificationsAction = ({user_id}) => async dispatch => {
    dispatch({type: NOTIFICATION_TYPES.GET_NOTIFICATIONS_START});
    try {
        const response = await axios.get(`${BackendSDK.url}/notifications/getAll/${user_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: NOTIFICATION_TYPES.GET_NOTIFICATIONS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: NOTIFICATION_TYPES.GET_NOTIFICATIONS_ERROR,
            payload: error.response ? error.response.data.message : error.message
        });
    }
}