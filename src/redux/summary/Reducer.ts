import { SUMMARY_DATA, SUMMARY_KEY, SUMMARY_RESET, SUMMARY_UPDATE } from "../Types";

const INIT_STATE = {
    [SUMMARY_KEY]: {
        [SUMMARY_DATA]:null
    }
}

export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case SUMMARY_UPDATE:
            return { ...state, [SUMMARY_KEY]: action.payload };
        case SUMMARY_RESET:
            return {
                ...state,
                ...{
                    [SUMMARY_KEY]: {
                        [SUMMARY_DATA]:null
                    }
                }
            }
        default:
            return state;
    }
};