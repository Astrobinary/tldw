/* ACTION TYPES */
const MOSTVIEWED_REQUEST = "feed/MOSTVIEWED_REQUEST";
const MOSTVIEWED_SUCCESS = "feed/MOSTVIEWED_SUCCESS";
const MOSTVIEWED_FAIL = "feed/MOSTVIEWED_FAIL";

const TRENDING_REQUEST = "feed/TRENDING_REQUEST";
const TRENDING_SUCCESS = "feed/TRENDING_SUCCESS";
const TRENDING_FAIL = "feed/TRENDING_FAIL";

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
    mostTalked: initialTimes
};

/* MOST VIEWED ACTION CREATORS */
export function _mostViewedRequest(timeSort) {
    return {
        type: MOSTVIEWED_REQUEST,
        timeSort
    };
}
export function _mostViewedSuccess(timeSort, videos) {
    return {
        type: MOSTVIEWED_SUCCESS,
        timeSort,
        videos
    };
}
export function _mostViewedFail(timeSort, error) {
    return {
        type: MOSTVIEWED_FAIL,
        timeSort,
        error
    };
}

/* TRENDING ACTION CREATORS */
export function _trendingRequest(timeSort) {
    return {
        type: TRENDING_REQUEST,
        timeSort
    };
}
export function _trendingSuccess(timeSort, videos) {
    return {
        type: TRENDING_SUCCESS,
        timeSort,
        videos
    };
}
export function _trendingFail(timeSort, error) {
    return {
        type: TRENDING_FAIL,
        timeSort,
        error
    };
}

/* UPDATE SORT ACTION CREATORS */
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

export default function reducer(state = initialState, action) {
    switch (action.type) {
        /* MOSTVIEWED */
        case MOSTVIEWED_REQUEST:
            return Object.assign({}, state, {
                mostViewed: { ...state.mostViewed, [action.timeSort]: { ...state.mostViewed[action.timeSort], isFetching: true } }
            });
        case MOSTVIEWED_SUCCESS:
            return Object.assign({}, state, {
                mostViewed: { ...state.mostViewed, [action.timeSort]: { ...state.mostViewed[action.timeSort], isFetching: false, videos: action.videos } }
            });
        case MOSTVIEWED_FAIL:
            return Object.assign({}, state, {
                mostViewed: { ...state.mostViewed, [action.timeSort]: { ...state.mostViewed[action.timeSort], isFetching: false, error: action.error } }
            });

        /* TRENDING */
        case TRENDING_REQUEST:
            return Object.assign({}, state, {
                trending: { ...state.trending, [action.timeSort]: { ...state.trending[action.timeSort], isFetching: true } }
            });
        case TRENDING_SUCCESS:
            return Object.assign({}, state, {
                trending: { ...state.trending, [action.timeSort]: { ...state.trending[action.timeSort], isFetching: false, videos: action.videos } }
            });
        case TRENDING_FAIL:
            return Object.assign({}, state, {
                trending: { ...state.trending, [action.timeSort]: { ...state.trending[action.timeSort], isFetching: false, error: action.error } }
            });

        /* UPDATE SORTING */
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

/* Most Viewed Section */
export const fetchMostViewed = timeSort => dispatch => {
    dispatch(_mostViewedRequest(timeSort));
    dispatch(_mostViewedSuccess(timeSort, ["test video item"]));
};

/* Trending Section */
export const fetchTrending = timeSort => dispatch => {
    const error = "This is a test trending error.";

    dispatch(_trendingRequest(timeSort));
    dispatch(_trendingFail(timeSort, error));
};
