import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import BasicTabs from './components/Tabs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/dashboard" Component={BasicTabs} />
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
