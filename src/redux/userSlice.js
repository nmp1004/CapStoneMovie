import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    user:null,
}

let userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setLogin:(state,action) => { 
            state.user = action.payload
         },
        removeLogin : (state,action) => { 
            state.user = null
         },

    }
})

export let { setLogin,removeLogin } = userSlice.actions
export default userSlice.reducer