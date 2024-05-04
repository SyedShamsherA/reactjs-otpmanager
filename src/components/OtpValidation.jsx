import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateOTPAction } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import './css/otp.css'

const OTPForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState(' ');
    const [otp, setOTP] = useState('');
    const error = useSelector((state) => state.otp.error)

    const handleOTPValidation = () => {
        dispatch(validateOTPAction({ email, otp }))
        navigate('/createPassword')
    }

    return (
        <div className="mainContainerOtp">
            <h2 className="validate">Validate<br />OTP<br />with<br />Email</h2>
            <div className="containerOtp">
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} />
                <Button className="otpButton" onClick={handleOTPValidation}>Validate OTP</Button>
                {error && <p className="pOtp">{error}</p>}
            </div>
        </div>
    )
}

export default OTPForm