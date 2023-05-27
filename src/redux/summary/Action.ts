import { SUMMARY_KEY, SUMMARY_RESET, SUMMARY_UPDATE, SUMMARY_ROOT, SUMMARY_DATA } from "../Types";
import { DispatchCB } from "../Store";
import { Utils } from "../../util";

/** Map state to props */
export const getSummartStateToProps = (id:number, state: any) => {
    const { summary } = state;
    const summary_key = summary && summary[SUMMARY_KEY] ? summary[SUMMARY_KEY] : {};
    const summary_data = summary_key && summary_key[SUMMARY_DATA] ? summary_key[SUMMARY_DATA] :0;

    const data= Utils.getWholeData()
    const pnSummaryList = data?.filter((ele:any)=> ele?.id === id)
    const pnList = pnSummaryList?.length && pnSummaryList[0]?.logs
    return ({
        summary_data,
        pnSummaryList,
        pnList
    })
}

/** Manage Summary UI Constraints */
export const updateSummaryUIConstraints = (obj: any): any => {
    return (dispatch: DispatchCB, getState: any) => {
        try {
            const formData = getState()[SUMMARY_ROOT][SUMMARY_KEY];
            const data = Object.assign(formData, obj);

            dispatch(updateSummaryState(data));
        } catch (error) {
            console.log("Update Summary UI Constraints ===> error ", error);
        }
    }
}

/** Update Summary data state */
const updateSummaryState = (obj: any): any => {
    return (dispatch: DispatchCB, getState: any) => {
        try {
            const formData = getState()[SUMMARY_ROOT][SUMMARY_KEY];

            dispatch({
                type: SUMMARY_UPDATE,
                payload: Object.assign(formData, obj)
            })
        } catch (error) {
            console.log("Update Summary Data State ===> error ", error);
        }
    }
}

/** Reset Summary data state */
export const resetSummaryState = () => {
    return (dispatch: DispatchCB) => {
        try {
            dispatch({
                type: SUMMARY_RESET,
                payload: {}
            })
        } catch (error) {
            console.log("Reset Summary State ===> error ", error);
        }
    }
}


