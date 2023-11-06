import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading : false,
}

const spinnerSlicer = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOn: (state,action) => { 
        state.isLoading = true;
     },
    setLoadingOff: (state,action) => { 
        state.isLoading = false;
    }
  }
});

export const {setLoadingOn,setLoadingOff} = spinnerSlicer.actions

export default spinnerSlicer.reducer