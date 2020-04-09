import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth27281Reducer from '../features/EmailAuth27281/redux/reducers';
import CalendarView27279Reducer from '../features/CalendarView27279/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth27281: EmailAuth27281Reducer,
CalendarView27279: CalendarView27279Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});