import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import BasicTabs from './components/Tabs';
import OTPForm from './components/OtpValidation';
import PasswordManagerDashboard from './components/passwordManagerDashboard';
import OtpSidebar from './components/OtpSidebar';
import Document from './components/Document';
import CreatePassword from './components/CreatePassword';
import GetPassword from './components/GetPassword';
import UpdatePassword from './components/UpdatePassword';
import DeletePassword from './components/DeletePassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path='/otpValidation' Component={OTPForm} />
        <Route path='/otpsidebar' Component={OtpSidebar} />
        <Route path='/password-manager' Component={PasswordManagerDashboard} />
        <Route path='/document' Component={Document} />
        <Route path='/createPassword' Component={CreatePassword} />
        <Route path='/getPassword' Component={GetPassword} />
        <Route path='/updatePassword' Component={UpdatePassword} />
        <Route path='/deletePassword' Component={DeletePassword} />
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
