
export default function applicationReducer(state ={}, action) {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
}