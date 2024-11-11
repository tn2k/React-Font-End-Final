import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counterReducer'
// import userReducer from './userReducer'
import authReducer from './authSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store