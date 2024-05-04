import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice';
import otpReducer from './slice';
import passwordManagerReducer from './passwordSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    otp: otpReducer,
    passwordManager: passwordManagerReducer
  },
});

export default store;
