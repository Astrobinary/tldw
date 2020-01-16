/* ACTION TYPES */
const INITIAL_FETCH = "feed/INIT_FETCH";
const UPDATE_VIEW_SORTING = "feed/UPDATE_VIEWED_SORTING";
const UPDATE_TALK_SORTING = "feed/UPDATE_TALKED_SORTING";

/* ACTION CREATORS */
export function initialFetch() {
    return {
        type: INITIAL_FETCH,
        payload: "what is this"
    };
}

export function updateViewSorting(newSort) {
    return {
        type: UPDATE_VIEW_SORTING,
        newSort
    };
}

export function updateTalkSorting(newSort) {
    return {
        type: UPDATE_TALK_SORTING,
        newSort
    };
}

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
    language: ""
};

/* REDUCER */
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INITIAL_FETCH:
            return Object.assign({}, state, { videos: action.payload });
        case UPDATE_VIEW_SORTING:
            return Object.assign({}, state, {
                mostViewed: { ...state.mostViewed, currentSort: action.newSort }
            });
        case UPDATE_TALK_SORTING:
            return Object.assign({}, state, {
                mostTalked: { ...state.mostViewed, currentSort: action.newSort }
            });
        default:
            return state;
    }
}

/* SIDE EFFECTS */
function shouldFetchVideos(state, type) {
    const videos = state[type];
    if (!videos) {
        return true;
    } else if (state.isFetching) {
        return false;
    }
}
