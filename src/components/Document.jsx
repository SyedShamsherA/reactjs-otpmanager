import React from 'react'

export default function Document() {
    return (
        <div>
            <h2>Document</h2>
            <p>
                <h4>Signup</h4>
                <h5>User Input:</h5>

                • User provides a username, email, and password during signup.<br />

                <h5>API Call (Signup):</h5>
                • The frontend sends a request to the server API to create a new user account.<br />
                • The server responds with an API key.

                <h5>Session Start:</h5>

                • The OTP manager starts a session, storing the username, email, and API key locally.

                <h4>Login</h4>
                <h5>User Input:</h5>

                • User enters their email and password for login.

                <h5>API Call (Login):</h5>

                • The frontend sends a request to the server API to authenticate the user.
                • The server responds with an API key.

                <h5>Session Start:</h5>

                • The OTP manager starts a session, storing the email and API key locally.

                <h4>Dashboard</h4>
                <h5>User Authentication:</h5>

                • On accessing the dashboard, the OTP manager checks for an existing session.

                <h5>Display User Details:</h5>

                • If a session exists, the dashboard displays the username, email, and API key.

                <h5>Logout:</h5>

                • Users can log out, ending the session.

                <h4>Email OTP Verification</h4>
                <h5>Email OTP Card:</h5>

                • The dashboard includes a card for email OTP verification.
                • User Interaction:

                • Users input an email address and request an OTP.

                <h5>API Call (Email OTP):</h5>

                • The frontend sends a request to the server API to generate and send an OTP to the specified email.

                <h5>Email Validation: </h5>

                • Users receive an OTP in their email and input it for validation.

                <h4>Token Expiry</h4>
                <h5>Token Duration:</h5>

                • After successful login, a token is generated with a one-hour expiry.

                <h5>Session Expiry:</h5>

                • If the user is inactive for one hour, the session expires.

                <h5>Reauthentication: </h5>

                • Users need to log in again after session expiry.

                <h4>OTP Usage Tracking</h4>
                <h5>Bar Graph:</h5>

                • The dashboard includes a bar graph to visually represent the number of OTPs used, provided, and validated.

                <h5>Real-time Updates:</h5>

                • The graph updates in real-time based on user interactions with OTPs.

                <h5>APIs</h5>
                • https://capstone-otpmanager.onrender.com/api/auth/user/signup - for signing up and getting APIKEY;<br />
                • https://capstone-otpmanager.onrender.com/api/auth/userdetails - for getting the user; <br />
                • https://capstone-otpmanager.onrender.com/api/dashboard/send-otp-by-email - for getting an otp when sending email. 
            </p>
        </div>
    )
}
