import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails, fetchOtpCount, fetchValidatedOtpCount, fetchCountValidatedOtps, getUserDetails } from '../redux/slice';
import { Bar } from 'react-chartjs-2';
import { json, useLocation } from 'react-router-dom';
import SendOtpByEmail from './sendOtpByEmail';
import { Chart } from 'chart.js/auto';
import { Card } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import GIF from 'gif.js';
import calenderGIF from '../assets/calender.gif'
import donut from '../assets/donut.png'
import Email from '../assets/email.png';
import Key from '../assets/apikey.png';
import Otp from '../assets/otp.png'
import './css/dashboard.css'
import OtpSidebar from './OtpSidebar';
import Globe from './Globe';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.users);
  const otpCount = useSelector((state) => state.otpCount);
  const validatedOtpCount = useSelector((state) => state.validatedOtpCount);
  const location = useLocation();
  const apiKey = new URLSearchParams(location.search).get('apiKey');
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [countValidatedOtps, setCountValidatedOtps] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update current date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const day = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

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
    <div className='containerHome'>
      <OtpSidebar />
      <div className='mainContainer'>
        <h1 className='heading'>Hello {user.username}</h1>
        <p className='detailDashboard'>Flawless high-volume OTP-delivery. Before authorizing any< br/>
        action, validate emails and do much more.</p>
        {/* {console.log(user )} */}
        <div className='cardContainer'>
          <div className='cardOne'>
            <div className='cardElementsOne'>
              <h3>Email</h3>
              <p>{user.email}</p>
            </div>
            <img src={Email} alt='email' />
          </div>
          <div className='cardTwo'>
            <h3>Api Key</h3>
            <p>{user.apikey}</p>
            <img src={Key} alt='key' />
          </div>
          <div className='cardThree'>
            <h3>Validated Otps</h3>
            <p>{JSON.stringify(countValidatedOtps)}</p>
            <img src={Otp} alt='otp' />
          </div>
        </div>

        <p className='detailsDashboadOne'>Deliver a smooth customer experience while fighting fraud possibilities. Eliminate the risk of fraudulent attempts with
           one-time passwords (OTPs). A must have layer of security in mobile authentication for every following action.
           Automate real-time fight response to make the engagement safer.
        </p>

        <div className='containerOne'>
          

          <div>
            <Card className='Card'>
              <Bar data={chartData} options={options} />
            </Card>
          </div>

          <div>
            <Card className='cardCalender'>
            <img src={calenderGIF} alt='calender-gif' className='calendergif' />
              <div className='calender'>
                 <div className='dateContainer'><p className='date'>Date: {date}</p></div>
                 <div className='dateContainer'><p className='date'>Day: {day}</p></div>
                 <div className='dateContainer'><p className='date'>Month: {month}</p></div>
                 <div className='dateContainer'><p className='date'>Year: {year}</p></div>
              </div>
            </Card>
          </div>
        </div>

        <div className='containerOne'>
          <div>
            <Card className='Card'>
              <Bar data={data} options={options} />
            </Card>
          </div>

          <p className='detailDashboardTwo'>
            Create different action flows for different security scenarios.<br />
            Authorize before any access of emails.<b />
            Adopt <strong>global standards</strong> for the one-time passwords<br />
            algorithm.<br />
            Determine the validity period of OTP messages.
            <strong>Accelerate the verification</strong> of your Emails, and<br />
            store all your password to password-manager.
          </p>

          {/* <div className='globe'>
        <Globe />
        </div> */}
        </div>

      </div>
      <div className='mainContainerOne'>
        <div>
        <img src={donut} alt='donut' className='donutOtp' />
            <Card className='cardOtp'>
              <SendOtpByEmail />
            </Card>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
