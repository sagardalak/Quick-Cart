import { createSlice } from "@reduxjs/toolkit";

const FromSlice = createSlice({
  name: "Form",
  initialState: {
    
      username: ""
  },
  reducers: {
    setFormData:(state,action)=>
    {
        state.username = action.payload;
      
    }
  },
});
 export const {setFormData}=FromSlice.actions;
 export default FromSlice.reducer
