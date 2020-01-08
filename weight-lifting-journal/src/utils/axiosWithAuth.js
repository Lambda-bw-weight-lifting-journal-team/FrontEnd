import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://bw-weight-lifting.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}