const INIT_FETCH = "feed/INIT_FETCH";

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
    currentTime: "day"
};

const initialState = {
    sponsored: initialTimes,
    mostViewed: initialTimes,
    trending: initialTimes,
    mostTalked: initialTimes,
    language: ""
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INIT_FETCH:
            return Object.assign({}, state, { videos: action.payload });
        default:
            return state;
    }
}

export function initialFetch() {
    return {
        type: INIT_FETCH,
        payload: "what is this"
    };
}

function shouldFetchVideos(state, type) {
    const videos = state[type];
    if (!videos) {
        return true;
    } else if (state.isFetching) {
        return false;
    }
}
