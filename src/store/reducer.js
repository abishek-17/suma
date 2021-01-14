import DataReducer from './patientdata/reducer'
const {
    combineReducers
} = require("@reduxjs/toolkit");

const reducer = combineReducers({
    data:DataReducer
})

export default reducer;