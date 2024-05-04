import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPasswordAction } from "../redux/passwordSlice";
import PasswordSidebar from "./passwordSidebar";
import './css/getPassword.css'

const GetPassword = () => {
    const dispatch = useDispatch();
    const [otp, setOTP] = useState('')
    const passwordInfo = useSelector((state) => state.passwordManager.otp.passwords)
    const error = useSelector((state) => state.passwordManager.error)
    const state = useSelector((state) => state.passwordManager)
    console.log(state, 'state');
    console.log(passwordInfo, 'passwordinfo')


    const handleGetAllPasswords = () => {
        dispatch(getPasswordAction(otp))
    }

    useEffect(() => {
        dispatch(getPasswordAction(otp))
    }, [dispatch])

    return (
        <div>
            <PasswordSidebar />
            <div className="containerGetPassword">
                <h1 className="getPasswordHeading">Get Password</h1>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    className="containerInputGetPassword"
                />
                <button onClick={handleGetAllPasswords} className="buttonGetPassword">Get Password</button>
                <div>
                { !!passwordInfo && passwordInfo.map ((passwordInfo, index) => (
                    <li key={index}>
                    <strong className="getAppName">AppName: {passwordInfo.appName};</strong> 
                    <strong className="getPassword">Password: {passwordInfo.password}</strong> 
                </li>
                )
                )}
            </div>
            {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default GetPassword