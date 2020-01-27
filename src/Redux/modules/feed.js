/* ACTION TYPES */
const INITIAL_FETCH_REQUEST = "feed/INIT_FETCH_REQUEST";
const INITIAL_FETCH_SUCCESS = "feed/INIT_FETCH_SUCCESS";
const INITIAL_FETCH_FAIL = "feed/INIT_FETCH_FAIL";

const UPDATE_VIEW_SORTING = "feed/UPDATE_VIEWED_SORTING";
const UPDATE_TALK_SORTING = "feed/UPDATE_TALKED_SORTING";

/* INITIAL DATA */
const initialData = {
    videos: [],
    cursor: "",
    isFetching: false,
    error: false
};

const initialTimes = {
    day: initialData,
    week: initialData,
    month: initialData,
    all: initialData,
    currentSort: "day"
};

const initialState = {
    sponsored: initialTimes,
    mostViewed: initialTimes,
    trending: initialTimes,
    mostTalked: initialTimes,
    initialFetch: false
};

/* INITIAL FETCH ACTIONS */
export function _initialFetchRequest() {
    return {
        type: INITIAL_FETCH_REQUEST
    };
}
export function _initialFetchSuccess() {
    return {
        type: INITIAL_FETCH_SUCCESS
    };
}

export function _initialFetchFail(error) {
    return {
        type: INITIAL_FETCH_FAIL,
        error
    };
}

/* UPDATE SORT ACTIONS */
export function _updateViewSorting(newSort) {
    return {
        type: UPDATE_VIEW_SORTING,
        newSort
    };
}

export function _updateTalkSorting(newSort) {
    return {
        type: UPDATE_TALK_SORTING,
        newSort
    };
}

/* REDUCER */
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INITIAL_FETCH_REQUEST:
            return { ...state };

        case INITIAL_FETCH_SUCCESS:
            return Object.assign({}, state, { initialFetch: true });

        case INITIAL_FETCH_FAIL:
            return Object.assign({}, state, {});
        case UPDATE_VIEW_SORTING:
            return Object.assign({}, state, {
                mostViewed: { ...state.mostViewed, currentSort: action.newSort }
            });
        case UPDATE_TALK_SORTING:
            return Object.assign({}, state, {
                mostTalked: { ...state.mostTalked, currentSort: action.newSort }
            });
        default:
            return state;
    }
}

/* SIDE EFFECTS */

export const startInitalFetch = state => dispatch => {
    dispatch(_initialFetchRequest());
    dispatch(_initialFetchSuccess());
};

export function shouldFetchVideos(state, type, sort) {
    const videos = state[type].sort.videos;
    if (!videos) {
        return true;
    } else if (state[type].sort.isFetching) {
        return false;
    }
}
