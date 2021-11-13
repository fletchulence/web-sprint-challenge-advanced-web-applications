import axios from 'axios';

const axiosWithAuth = () =>{
   const token = localStorage.getItem('token')
   // const admin = localStorage.getItem('admin')
   //? creates an instance of axios with global config setup
    return axios.create({
      headers: {
         Authorization: token
      }
      // baseUrl: 'http://localhost:5004'
   });
};
export default axiosWithAuth;


//Task List:
//1. Complete axiosWithAuth