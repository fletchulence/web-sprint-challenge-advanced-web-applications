import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = () => {  
    const [ logoutTok , setLogoutTok ] = useState()
    const { push } = useHistory()
    
    useEffect(()=>{
        const token = window.localStorage.getItem('token')

        axiosWithAuth().post('http://localhost:5004/api/logout',{
                headers:{
                    Authorization: token
                }
            })
            .then(res=>{
                window.localStorage.removeItem('token')
                push('/login')
            })
    }, [])

    return(<div></div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.