import axios from 'axios';
import {POST_TYPES} from './post.types';
import BackendSDK from '@/BackendSDK';


export const createPostAction = (data) => async dispatch => {
    dispatch({type: POST_TYPES.CREATE_POST_START});
    try {
        const response = await axios.post(`${BackendSDK.url}/posts/create`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: POST_TYPES.CREATE_POST_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: POST_TYPES.CREATE_POST_ERROR,
            payload: error.response.data.message
        });
    }
}

export const getPostsAction = () => async dispatch => {
    dispatch({type: POST_TYPES.GET_POSTS_START});
    try {
        const response = await axios.get(`${BackendSDK.url}/posts/getAll`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: POST_TYPES.GET_POSTS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: POST_TYPES.GET_POSTS_ERROR,
            payload: error.response.data.message
        });
    }
}

export const likePostAction = (data) => async dispatch => {
    dispatch({type: POST_TYPES.LIKE_POST_START});
    try {
        const response = await axios.post(`${BackendSDK.url}/likes/create/${data.post_id}`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: POST_TYPES.LIKE_POST_SUCCESS,
            payload: response.data
        });

        

    }
    catch (error) {
        dispatch({
            type: POST_TYPES.LIKE_POST_ERROR,
            payload: error.response.data.message
        });
    }
    dispatch(getPostsAction());
}


export const unlikePostAction = (data) => async dispatch => {
    dispatch({type: POST_TYPES.UNLIKE_POST_START});
    try {
        const response = await axios.delete(`${BackendSDK.url}/likes/delete/${data.like_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: POST_TYPES.UNLIKE_POST_SUCCESS,
            payload: response.data
        });

        

    }
    catch (error) {
        dispatch({
            type: POST_TYPES.UNLIKE_POST_ERROR,
            payload: error.response.data.message
        });
    }
    dispatch(getPostsAction());
}

export const commentPostAction = (data) => async dispatch => {
    dispatch({type: POST_TYPES.COMMENT_POST_START});
    try {
        const response = await axios.post(`${BackendSDK.url}/comments/create/${data.post_id}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch({
            type: POST_TYPES.COMMENT_POST_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: POST_TYPES.COMMENT_POST_ERROR,
            payload: error.response.data.message
        });
    }
    dispatch(getPostsAction());
}