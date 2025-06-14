import { createSlice } from "@reduxjs/toolkit";
let  SortedQueSlice = createSlice({
    name : "sortedQue",
    initialState: [],
    reducers: {
      addData(state , action){
        return action.payload;
      }
    }
})

export default SortedQueSlice.reducer;
export let { addData } = SortedQueSlice.actions;