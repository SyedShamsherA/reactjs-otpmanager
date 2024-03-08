import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails, fetchOtpCount, fetchValidatedOtpCount, fetchCountValidatedOtps, getUserDetails } from '../redux/slice';
import { Bar } from 'react-chartjs-2';
import { json, useLocation } from 'react-router-dom';
import SendOtpByEmail from './sendOtpByEmail';
import { Chart } from 'chart.js/auto';
import { Card } from 'react-bootstrap';
import '../css/dashboard.css'

const Dashboard = () => {
  const user = useSelector((state) => state.auth.users);
  const otpCount = useSelector((state) => state.otpCount);
  const validatedOtpCount = useSelector((state) => state.validatedOtpCount);
  const location = useLocation();
  const apiKey = new URLSearchParams(location.search).get('apiKey');
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [countValidatedOtps, setCountValidatedOtps] = useState(null);

  useEffect(() => {
    dispatch(getUserDetails());
    dispatch(fetchUserDetails());
    dispatch(fetchOtpCount());
    dispatch(fetchValidatedOtpCount());
    const getCountValidatedOtps = async () => {
      try {
        const count = await dispatch(fetchCountValidatedOtps({ token, apiKey }));
        setCountValidatedOtps(count.payload);
      } catch (error) {
        console.error('Fetch count of validated OTPs error:', error);
      }
    }
    getCountValidatedOtps();
  }, [dispatch, token, apiKey]);

  const chartData = {
    labels: ['Total OTPs', 'Validated OTPs'],
    datasets: [
      {
        label: 'OTP Statistics',
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(255,99,132,0.6)'],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [otpCount, validatedOtpCount],
      },
    ],
  };

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Dummy Data',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='mainContainer'>
      <h2 className='heading'>Dashboard</h2>
      {/* {console.log(user )} */}
      <div className='containerOne'>
        <div>
          <Card className='Card'>
            <h3>User information</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Apikey: {user.apikey}</p>
            <p>Count of Validated OTPs: {JSON.stringify(countValidatedOtps)}</p>
            <p>(Note: the user information will only be visible when Signing/Logging in)</p>
          </Card>
        </div>

        <div>
          <Card className='Card'>
          <h2>Bar Chart</h2>
            <Bar data={chartData} options={options} />
          </Card>
        </div>
      </div>

      <div className='containerOne'>
        <div>
          <Card className='Card'>
            <SendOtpByEmail />
          </Card>
        </div>
        <div>
          <Card className='Card'>
            <h2>Bar Chart</h2>
            <Bar data={data} options={options} />
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
