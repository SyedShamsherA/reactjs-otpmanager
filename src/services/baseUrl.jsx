import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'https://capstone-otpmanager.onrender.com/api'
})

export default baseUrl