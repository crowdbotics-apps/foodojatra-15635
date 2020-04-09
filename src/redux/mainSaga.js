import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth27281Saga from '../features/EmailAuth27281/redux/sagas';
import CalendarView27279Saga from '../features/CalendarView27279/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth27281Saga,
CalendarView27279Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}