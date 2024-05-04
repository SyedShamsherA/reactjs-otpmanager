import { createSlice } from "@reduxjs/toolkit";
import api from '../services/api'

export const passwordManagerSlice = createSlice({
    name: 'passwordManager',
    initialState: {
        otp: '',
        appName: '',
        password: '',
        error: '',
    },
    reducers: {
        createPasswordSuccess: ( state, action ) => {
            state.otp = action.payload;
            state.appName = action.payload;
            state.password = action.payload;
            state.error = '';
        },
        createPasswordFailure: ( state, action ) => {
            state.error = action.payload;
        },
        getPasswordSuccess: ( state, action ) => {
            state.otp = action.payload;
            //state.password = action.payload;
            state.error = '';
        },
        getPasswordFailure: ( state, action ) => {
            state.otp = {};
            state.error = action.payload;
        },
        updatePasswordSuccess: ( state, action ) => {
            state.otp = action.payload;
            state.action = action.payload;
            state.password = action.payload;
            state.error = '';
        },
        updatePasswordFailure: ( state, action ) => {
            state.error = action.payload;
        },
        deletePasswordSuccess: ( state, action ) => {
            state.otp = action.payload;
            state.appName = action.payload;
            state.error = '';
        },
        deletePasswordFailure: ( state, action ) => {
            state.error = action.payload
        }
    }
})

export const {
    createPasswordSuccess, createPasswordFailure,
    getPasswordSuccess, getPasswordFailure,
    updatePasswordSuccess, updatePasswordFailure,
    deletePasswordSuccess, deletePasswordFailure
} = passwordManagerSlice.actions

export const createPasswordAction = (passwordData) => async(dispatch) => {
    try {
        const response = await api.createPassword(passwordData)
        dispatch(createPasswordSuccess(response))
    } catch (error) {
        dispatch(createPasswordFailure(error))
    }
}

export const getPasswordAction = (otp) => async(dispatch) => {
    try {
        const response = await api.getPassword(otp)
        dispatch(getPasswordSuccess(response))
    } catch (error) {
        dispatch(getPasswordFailure(error))
    }
}

export const updatePasswordAction = (passwordData) => async (dispatch) => {
    try {
        const response = await api.updatePassword(passwordData)
        dispatch(updatePasswordSuccess(response))
    } catch (error) {
        dispatch(updatePasswordFailure(error))
    }
}

export const deletePasswordAction = ( otp, appName ) => async (dispatch) => {
    try {
        const response = await api.deletePassword(otp, appName)
        dispatch(deletePasswordSuccess(response))
    } catch (error) {
        dispatch(deletePasswordFailure(error))
    }
}

export default passwordManagerSlice.reducer