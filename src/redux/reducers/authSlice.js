// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     token: null,
//     isAuthenticated: false,
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setToken: (state, action) => {
//             state.token = action.payload
//             state.isAuthenticated = !!action.payload
//         },
//         clearToken: (state) => {
//             state.token = null;
//             state.isAuthenticated = false;
//         }
//     }
// })

// // Action creators are generated for each case reducer function
// export const { setToken, clearToken } = authSlice.actions

// export default authSlice.reducer