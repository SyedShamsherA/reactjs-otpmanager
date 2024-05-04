// import baseUrl from "./baseUrl";
const baseUrl = 'https://capstone-otpmanager.onrender.com/api'
const api = {
    login: async (userData) => {
      const response = await fetch(`${baseUrl}/auth/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const user = await response.json();
      return user;
    },
  
    signup: async (userData) => {
      const response = await fetch(`${baseUrl}/auth/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Signup failed');
      }
  
      const user = await response.json();
      return user;
    },
  
    fetchUserDetails: async () => {
      const apikey = localStorage.getItem('apikey')
      const response = await fetch(`${baseUrl}/dashboard/user-details/${apikey}`);
  
      if (!response.ok) {
        throw new Error('Fetch user details failed');
      }
  
      const user = await response.json();
      return user;
    },
  
    fetchOtpCount: async () => {
      const response = await fetch(`${baseUrl}/dashboard/count-otps`, {
        method:'GET',
        headers: {
          'Content-type': 'application/json',
          'authorization': localStorage.getItem("token")
        }
      });
  
      if (!response.ok) {
        throw new Error('Fetch OTP count failed');
      }
  
      const count = await response.json();
      return count;
    },
  
    fetchValidatedOtpCount: async () => {
      const response = await fetch(`${baseUrl}/dashboard/validate-otp`, {
        method:'POST'
      });
  
      if (!response.ok) {
        throw new Error('Fetch validated OTP count failed');
      }
  
      const count = await response.json();
      return count;
    },

    fetchCountValidatedOtps: async (token, apiKey) => {
      const response = await fetch(`${baseUrl}/dashboard/count-validated-otps`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
          'ApiKey': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error('Fetch count of validated OTPs failed');
      }
  
      const count = await response.json();
      return count;
    },

    sendOtpByEmail: async (userData) => {
      const response = await fetch(`${baseUrl}/dashboard/send-otp-by-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Send OTP by email failed');
      }
    },

    userDetails: async () => {
      try {
        console.log('reached function')
      const response = await fetch(`${baseUrl}/auth/userdetails` , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem("token")
        },
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('failed to fetch details');
      }
      
      const user = await response.json();
      localStorage.setItem('apikey', user.userDetails.apikey)
      console.log(user)
      return user;
      } catch (error) {
        console.error('error:', error)
      }
    },

    validateOtp: async ( otpData ) => {
      try {
        const response = await fetch(`${baseUrl}/otpValidation/validate`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(otpData)
        })
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.messge)
        }
        return await response.json()
      } catch (error) {
        console.error('otpError', error)
        throw error.messge
      }
    },

    createPassword: async (passwordData) => {
      try {
        const response = await fetch(`${baseUrl}/passwordManager/createPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(passwordData)
        })
        if(!response.ok){
          const errorData = await response.json()
          throw new Error(errorData.messge)
        }
        return await response.json()
      } catch (error) {
        console.error(error)
        throw error.messge
      }
    }, 

    getPassword: async (otp) => {
      try {
        const response = await fetch(`${baseUrl}/passwordManager/getAllPasswords?otp=${otp}`, )
        if(!response.ok){
          const errorData = await response.json()
          throw new Error(errorData.message)
        }
        return await response.json()
      } catch (error) {
        console.error(error)
        throw error.message
      }
    },

    updatePassword: async(passwordData) => {
      try {
        const response = await fetch(`${baseUrl}/passwordManager/updatePassword`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(passwordData)
        })
        if(!response.ok){
          const errorData = await response.json()
          throw new Error(errorData.message)
        }
        return await response.json()
      } catch (error) {
        console.error(error)
        throw error.message
      }
    },

    deletePassword: async(otp, appName) => {
      try {
        const response = await fetch(`${baseUrl}/passwordManager/deletePassword`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({otp, appName})
        })
        if(!response.ok){
          const errorData = await response.json()
          throw new Error(errorData.message)
        }
        return await response.json()
      } catch (error) {
        console.error(error)
        throw error.message
      }
    }
  };
  
  export default api;
  