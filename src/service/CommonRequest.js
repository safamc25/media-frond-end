// import Axios library

import axios from 'axios';

// define common request function
export const commonRequest=async(method,url,body)=>{
    
    // api request configuration

    let reqConfig={
        method,
        url,
        data:body,
        headers:{
            "content-type":"application/json"
            // if we upload file(image,aadhar card,pdf,video) we use content type:multipart formdata
        }
    }

    // api call using axios

   return await axios(reqConfig).then((response)=>{
        return response
    }).catch((err)=>{
        return err
    })

}
