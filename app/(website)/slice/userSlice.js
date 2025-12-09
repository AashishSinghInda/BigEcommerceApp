import { createSlice } from "@reduxjs/toolkit"
import cookies from 'js-cookie'

const initialState = {
    // cookies ko use karne se pehele is tarah se use kiya tha 
      //  user : null,
      //  token : '',

      user : cookies.get("USER") ? JSON.parse(cookies.get('USER'))  : null,
      token : cookies.get('TOKEN') ? cookies.get('TOKEN') : '',

}

export const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        userData : (state , reqData) => {
             let {payload} = reqData;  // {user : res.data.user}
             state.user = payload.user;
             state.token = payload.token;

             // cookies ke baad me

             cookies.set('USER',JSON.stringify(state.user), {expires : 7});
             cookies.set('TOKEN',state.token, {expires :7})
        },
        logout : (state) => {
            state.user = null;
            state.token = '';
            cookies.remove('USER')
            cookies.remove('TOKEN')
        }
    }
})

export const {userData, logout} = loginSlice.actions;

export default loginSlice.reducer;