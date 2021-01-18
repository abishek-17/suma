import { createSlice} from "@reduxjs/toolkit";
import {save} from "./actions";

const data = createSlice({
    name: "data",
    initialState:[],
    extraReducers: {
        [save.type]: (data, action) => {
            if(data.length===0){
                data =[action.payload]
                return data;
            }
            data = [...data,
                action.payload]
            return data;
        },
    },
});
const DataReducer = data.reducer;
export default DataReducer;