import { combineReducers } from 'redux'
import Summary from './summary/Reducer'
import { SUMMARY_ROOT } from './Types';


export default combineReducers({
    [SUMMARY_ROOT]: Summary
});