const SAMPLE_CLICK = "tldw/sample/SAMPLE_CLICK";

const initialState = {
    sample: ""
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAMPLE_CLICK:
            return Object.assign({}, state, { sample: action.payload });
        default:
            return state;
    }
}

export function sampleButtonClick() {
    return {
        type: SAMPLE_CLICK,
        payload: "result_of_simple_action"
    };
}
