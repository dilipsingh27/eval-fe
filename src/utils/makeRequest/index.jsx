import axios from 'axios';
const BACKEND_URL = 'http://localhost:8000/';

const makeRequest = async (apiEndPoint, dynamicConfig,navigate) => {
    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            url: apiEndPoint.url,
            method: apiEndPoint.method,
            ...dynamicConfig,
        };
        const { data } = await axios(requestDetails);
        return data;
    } catch (error) {
        const errorCode = error.response?.status;
        if (errorCode) {
            navigate(`/error/${errorCode}`);
        } else {
            navigate('/error');
        }
        console.log(navigate);
    }
};
  
export default makeRequest;