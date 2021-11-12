// import axios from 'axios';

// const axiosWithAuth = ()=> {
    
// }

// export default axiosWithAuth;

// //Task List:
// //1. Complete axiosWithAuth

import axios from 'axios';

const axiosWithAuth = () =>{
   const token = localStorage.getItem('token')
   //? creates an instance of axios with global config setup
    return axios.create({
      headers: {
         Authorization: token
      }
      // baseUrl: 'http://localhost:5002'
   });
};
export default axiosWithAuth;