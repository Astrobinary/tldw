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
export function _mostViewedSuccess(timeSort, videos, appendVideos, cursor) {
    return {
        type: MOSTVIEWED_SUCCESS,
        timeSort,
        videos,
        appendVideos,
        cursor
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
export function _trendingSuccess(timeSort, videos, cursor) {
    return {
        type: TRENDING_SUCCESS,
        timeSort,
        videos,
        cursor
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
            if (action.appendVideos) {
                return Object.assign({}, state, {
                    mostViewed: { ...state.mostViewed, [action.timeSort]: { ...state.mostViewed[action.timeSort], isFetching: false, videos: [...state.mostViewed[action.timeSort].videos, ...action.videos], cursor: action.cursor } }
                });
            } else {
                return Object.assign({}, state, {
                    mostViewed: { ...state.mostViewed, [action.timeSort]: { ...state.mostViewed[action.timeSort], isFetching: false, videos: action.videos, cursor: action.cursor } }
                });
            }

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

const options = { headers: { "Client-ID": "15c6l9641yo97kt42nnsa51vrwp70y", Accept: "application/vnd.twitchtv.v5+json" } };
const api = "https://api.twitch.tv/kraken";

/* Most Viewed Section */
export const fetchMostViewed = (timeSort, language, appendVideos, cursor) => dispatch => {
    dispatch(_mostViewedRequest(timeSort));

    return fetch(`${api}/clips/top?limit=25&period=${timeSort}&language=${language}${cursor}`, options)
        .then(response => response.json())
        .then(json => {
            if (json.status === 500) throw new Error("No more clips...");
            return dispatch(_mostViewedSuccess(timeSort, json.clips, appendVideos, json._cursor));
        })
        .catch(error => {
            console.error(`Error Fetching (Most Viewed): ${error}`);
            dispatch(_mostViewedFail(timeSort, `Failed to get most viewed vidoes ${timeSort}`));
        });
};

/* Trending Section */

export const fetchTrending = (timeSort, language, cursor) => dispatch => {
    dispatch(_trendingRequest(timeSort));

    return fetch(`${api}/clips/top?limit=100&language=${language}&trending=true${cursor}`, options)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return dispatch(_trendingSuccess(timeSort, json.clips, json._cursor));
        })
        .catch(error => {
            console.error(`Error Fetching (Most Viewed): ${error}`);
            dispatch(_trendingFail(timeSort, `Failed to get most viewed vidoes ${timeSort}`));
        });
};
