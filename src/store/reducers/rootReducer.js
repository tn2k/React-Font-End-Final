function rootReducer(state = { loading: false, loaded: false }, action) {
    switch (action.type) {
        case STARTED_LOADING:
            return { ...state, loading: true, loaded: false };
        case FINISHED_LOADING:
            return { ...state, loading: false, loaded: true };
        default:
            return state;
    }
}
export default rootReducer