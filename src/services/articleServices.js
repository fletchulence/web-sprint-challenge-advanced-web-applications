import axiosWithAuth from "../utils/axiosWithAuth"

const articleService = () => {
   return axiosWithAuth()
      .get('http://localhost:5004/api/articles')
      .then(res=>{
         const { data } = res.data

      return {
         articles:[{
            article:{
               author: data.author,
               createdoOn: data.createdOn, //timestamp of when article was added
               id: data.id, //unique article id
               headline: data.headline, //title of article
               summary: data.summart, //short summary statement of article
               body: data.body  //paragraph of article text
            }
         }]
      }

         })
         .catch(err=>console.error(err))

}

export default articleService;