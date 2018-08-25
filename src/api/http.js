import axios from 'axios'
import qs from 'qs'

const mhttp = {

    //get
    get(url, params = {}){
        if (!params.params){
            params = {params: params}
        }

        return new Promise((resolve,reject) =>{
            axios.get(url,params)
            .then( res => {
                resolve(res)    //成功
            })
            .catch( error => {
                reject(error)     //失败
            })
        })

    },
    
    //post
    post(url, params = {}){
        return new Promise((rsolve,reject) => {
            axios.post(url, qs.stringify(params))
            .then( res => {
                resolve(res)
            })
            .catch( error => {
                reject(error)
            })
        })
    }

}

export default mhttp