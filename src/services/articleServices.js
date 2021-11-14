import axiosWithAuth from "./../utils/axiosWithAuth"

const articleServices = async() => {
   return axiosWithAuth()
      .get('http://localhost:5004/api/articles')
        .then(res=>{
         // within your data is now your get request
         const { data } = res
         return data

         })
         .catch(err=>console.error(err))
}

export default articleServices;