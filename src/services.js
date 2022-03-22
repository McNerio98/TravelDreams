import axios from "axios";
import configApp from './configParams.json';


/**
 * 
 * @returns {Promise}
 */
export const popularPackages = () =>{
    return new Promise((resolve,reject) => {
        axios.get(`${configApp.API_URL}/api/package/populars`).then(response =>{
            resolve(response);
        }).catch(ex => {
            reject(ex);
        })
    });
}