import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import api from '../services/api'
import { produce } from "immer";

// Define initial state
let initialState = {
    user: {},
    users: {},
    otpCount: 0,
    validatedOtpCount: 0,
    status: 'idle',
    error: null,
};

// Thunk for login
const login = createAsyncThunk('auth/login', async (userData) => {
    const response = await api.login(userData);
    return response;
});

// Thunk for signup
const signup = createAsyncThunk('auth/signup', async (userData) => {
    const response = await api.signup(userData);
    return response;
});

// Thunk for fetching user details
const fetchUserDetails = createAsyncThunk('auth/fetchUserDetails', async () => {
    const response = await api.fetchUserDetails();
    return response;
});

// Thunk for fetching OTP count
const fetchOtpCount = createAsyncThunk('auth/fetchOtpCount', async () => {
    const response = await api.fetchOtpCount();
    return response;
});

// Thunk for fetching validated OTP count
const fetchValidatedOtpCount = createAsyncThunk('auth/fetchValidatedOtpCount', async () => {
    const response = await api.fetchValidatedOtpCount();
    return response;
});

// Thunk for sending OTP by email
const sendOtpByEmail = createAsyncThunk('auth/sendOtpByEmail', async (userData) => {
    const response = await api.sendOtpByEmail(userData);
    return response;
});

const fetchCountValidatedOtps = createAsyncThunk('auth/fetchCountValidatedOtps', async ({ token, apiKey }) => {
    const count = await api.fetchCountValidatedOtps(token, apiKey);
    return count;
});

const getUserDetails = createAsyncThunk('auth/UserDetails', async () => {
    console.log('reached slice')
    const response = await api.userDetails();
    console.log(response)
    return response;
});

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'succeeded';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchUserDetails.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getUserDetails.fulfilled, (state, action) => void(state.users = action.payload.userDetails)
                //console.log(state.user) 
                
                //console.log(state.user)
                //state.status = 'succeeded';
                //return action.payload.userDetails
                //console.log(current(state))
            )
            .addCase(fetchOtpCount.fulfilled, (state, action) => {
                state.otpCount = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchValidatedOtpCount.fulfilled, (state, action) => {
                state.validatedOtpCount = action.payload;
                state.status = 'succeeded';
            })
            .addCase(sendOtpByEmail.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase(fetchCountValidatedOtps.fulfilled, (state, action) => {
                state.validatedOtpCount = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchCountValidatedOtps.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountValidatedOtps.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.status = 'loading';
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                }
            );
    },
});

export default authSlice.reducer;
export { login, signup, fetchUserDetails, fetchOtpCount, fetchValidatedOtpCount, sendOtpByEmail, fetchCountValidatedOtps, getUserDetails };