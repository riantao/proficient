import axios,{
    AxiosInstance,
    AxiosRequestConfig
} from "axios";

export const makeHttpClient = ({ 
    baseURL,
    timeout = 5000
}: AxiosRequestConfig): AxiosInstance => axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    timeoutErrorMessage: "Request timed out",
    withCredentials: false,
    baseURL,
    timeout
})