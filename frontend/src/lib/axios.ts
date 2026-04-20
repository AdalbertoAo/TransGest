import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "@/constants/auth.constants";
import axios, { InternalAxiosRequestConfig } from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_URL

const axiosClient = axios.create({
  baseURL: baseURL,
  timeout: 10000
});

axiosClient.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)

    if (accessToken) {
        request.headers.Authorization =  `Bearer ${accessToken}`
        return request
    }
    
    return request
})

export default axiosClient