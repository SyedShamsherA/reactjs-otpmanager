import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPasswordAction, getPasswordAction, updatePasswordAction, deletePasswordAction } from "../redux/passwordSlice";
import PasswordSidebar from "./passwordSidebar";

const PasswordManagerDashboard = () => {
    const dispatch = useDispatch();
    const [appName, setAppName] = useState('')
    const [otp, setOTP] = useState('')
    const [password, setPassword] = useState('')
    const passwordData = { appName, password, otp }
    const passwordInfo = useSelector((state) => state.passwordManager.otp.passwords)
    const error = useSelector((state) => state.passwordManager.error)
    const state = useSelector((state) => state.passwordManager)
    console.log(state, 'state');
    console.log(passwordInfo, 'passwordinfo')

    const handleCreatePassword = () => {
        dispatch(createPasswordAction(passwordData))
        alert('Password created successfully')
    }

    const handleGetAllPasswords = () => {
        dispatch(getPasswordAction(otp))
    }

    const handleUpdatePassword = () => {
        dispatch(updatePasswordAction(passwordData))
        alert('Password updated successfully')
    }

    const handleDeletePassword = () => {
        dispatch(deletePasswordAction(otp, appName))
        alert('Password deleted successfully')
    }

    useEffect(() => {
        dispatch(getPasswordAction(otp))
    }, [dispatch])

    return (
        <div>
            <PasswordSidebar />
            <div>
                <input
                    type="text"
                    placeholder="Enter App Name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                />
                <button onClick={handleCreatePassword}>Create Password</button>
                <button onClick={handleGetAllPasswords}>Get Password</button>
                <button onClick={handleUpdatePassword}>Update Password</button>
                <button onClick={handleDeletePassword}>Delete Password</button>
            </div>
            <div>
                { !!passwordInfo && passwordInfo.map ((passwordInfo, index) => (
                    <li key={index}>
                    <strong>AppName: </strong> {passwordInfo.appName},
                    <strong>Password: </strong> {passwordInfo.password}
                </li>
                )
                )}
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}

export default PasswordManagerDashboard