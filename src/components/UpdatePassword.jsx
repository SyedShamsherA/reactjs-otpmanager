import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordAction } from "../redux/passwordSlice";
import PasswordSidebar from "./passwordSidebar";
import './css/createPassword.css'

const UpdatePassword = () => {
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

    const handleUpdatePassword = () => {
        dispatch(updatePasswordAction(passwordData))
        alert('Password updated successfully')
    }

    return (
        <div>
            <PasswordSidebar />
            <div className="containerCreatePassword">
                <h1 className="createPasswordHeading">Update Password</h1>
                <input
                    type="text"
                    placeholder="Enter App Name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="containerInputCreatePassword"
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="containerInputCreatePassword"
                />
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    className="containerInputCreatePassword"
                />
                <button onClick={handleUpdatePassword} className="buttonCreatePassword">Update Password</button>
                <p className="createPasswordParagh">Update all your passwords for particular application using otp; just submit Application Name; <br />
                    password and OTP from above input and click on update password button.</p>
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

export default UpdatePassword