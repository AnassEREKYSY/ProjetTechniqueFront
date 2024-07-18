import { POST_TYPES } from "./post.types";

const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null,
    success: false,
    post_loading: false,
    comments: [],
    comments_loading: false,
    comments_error: null,
    my_posts: [],
    my_posts_loading: false,
    my_posts_error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TYPES.GET_POSTS_START:
            return { ...state, loading: true };
        case POST_TYPES.GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload, loading: false };
        case POST_TYPES.GET_POSTS_ERROR:
            return { ...state, error: action.payload, loading: false };

        case POST_TYPES.GET_POST_START:
            return { ...state, post_loading: true };
        case POST_TYPES.GET_POST_SUCCESS:
            return { ...state, post: action.payload, post_loading: false, success: true };
        case POST_TYPES.GET_POST_ERROR:
            return { ...state, error: action.payload, post_loading: false };

        case POST_TYPES.CREATE_POST_START:
            return { ...state, loading: true };
        case POST_TYPES.CREATE_POST_SUCCESS:
            return { ...state, posts: [action.payload, ...state.posts], loading: false, success: true };
        case POST_TYPES.CREATE_POST_ERROR:
            return { ...state, error: action.payload, loading: false };

        case POST_TYPES.DELETE_POST_START:
            return { ...state, loading: true };
        case POST_TYPES.DELETE_POST_SUCCESS:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload), loading: false, success: true };
        case POST_TYPES.DELETE_POST_ERROR:
            return { ...state, error: action.payload, loading: false };

        case POST_TYPES.UPDATE_POST_START:
            return { ...state, loading: true };
        case POST_TYPES.UPDATE_POST_SUCCESS:
            return { ...state, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post), loading: false, success: true };
        case POST_TYPES.UPDATE_POST_ERROR:
            return { ...state, error: action.payload, loading: false };

        case POST_TYPES.LIKE_POST_START:
            return { ...state, loading: true };
        case POST_TYPES.LIKE_POST_SUCCESS:
            return { ...state, loading: false, success: true };
        case POST_TYPES.LIKE_POST_ERROR:
            return { ...state, error: action.payload, loading: false };

        case POST_TYPES.UNLIKE_POST_START:
            return { ...state, loading: true };
        case POST_TYPES.UNLIKE_POST_SUCCESS:
            return { ...state, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post), loading: false, success: true };
        case POST_TYPES.UNLIKE_POST_ERROR:
            return { ...state, error: action.payload, loading: false };
        
        case POST_TYPES.COMMENT_POST_START:
            return { ...state, loading: true };

        case POST_TYPES.COMMENT_POST_SUCCESS:
            return { ...state, loading: false, success: true };
        case POST_TYPES.COMMENT_POST_ERROR:
            return { ...state, error: action.payload, loading: false };
        
        case POST_TYPES.GET_COMMENTS_START:
            return { ...state, comments_loading: true };
        case POST_TYPES.GET_COMMENTS_SUCCESS:
            return { ...state, comments: action.payload, comments_loading: false, success: true };
        case POST_TYPES.GET_COMMENTS_ERROR:
            return { ...state, comments_error: action.payload, comments_loading: false };
        
        case POST_TYPES.DELETE_COMMENT_START:
            return { ...state, loading: true };
        case POST_TYPES.DELETE_COMMENT_SUCCESS:
            return { ...state, comments: state.comments.filter(comment => comment.id !== action.payload), loading: false, success: true };
        case POST_TYPES.DELETE_COMMENT_ERROR:
            return { ...state, error: action.payload, loading: false };

        case "RESET_SUCCESS_ERRORS":
            return { ...state, success: false, error: null,loading:false };
            
        default:
            return state;

    }
}
            
export default postReducer;
