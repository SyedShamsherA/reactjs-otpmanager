import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendOtpByEmail } from '../redux/slice';

const SendOtpByEmail = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSendOtp = () => {
    dispatch(sendOtpByEmail({ email }));
  };

  return (
    <div>
      <h2>Send OTP by Email</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <button onClick={handleSendOtp}>Send OTP</button>
      <p>(Note: with this form you can get otp as many times as you want)</p>
    </div>
  );
};

export default SendOtpByEmail;
