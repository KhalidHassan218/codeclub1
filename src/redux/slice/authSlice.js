import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLoggedIn: false,
userName:null,
userEmail:null,

}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_ACTIVE_USER(state , action){
        console.log(action.payload);
        const {email , username} = action.payload;
state.isLoggedIn= true;
state.userName = username;
state.userEmail = email;
    },
    REMOVE_ACTIVE_USER(state , action){
        state.isLoggedIn= false
        state.userName=null
        state.userEmail=null
            },

  }
});

export const {SET_ACTIVE_USER , REMOVE_ACTIVE_USER} = authSlice.actions
export const SelectUsername = (state) => state.auth.userName
export const SelectUseremail = (state) => state.auth.userEmail
export default authSlice.reducer