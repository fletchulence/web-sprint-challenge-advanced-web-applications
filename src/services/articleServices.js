import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import PrivateRoute from "../components/PrivateRoute";

// import View from "../components/View";

const articleService = () => {

   // const [ state, setState ] = React.useState({})
   
      axiosWithAuth().get('http://localhost:5004/api/articles')
         .then(res=>{
            console.log(res.data)
            setState({
               ...state,
               state: [res.data]
            })
            //    {
               
            //    blurb: {
            //       id: '',
            //       headline: '',

            //    }
            // })
         })
         
         .catch(err=>{
            console.log({ err })
         })
         return( state
            
         )
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.