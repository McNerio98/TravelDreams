import axios from "axios";
import configApp from './configParams.json';


/**
 * 
 * @returns {Promise}
 */
export const popularPackages = () =>{
    return new Promise((resolve,reject) => {
        axios.get(`${configApp.API_URL}/api/packages/populars`).then(response =>{
            resolve(response);
        }).catch(ex => {
            reject(ex);
        })
    });
}


/**
 * 
 * @returns {Promise}
 */
 export const getPackageInfo = (id) =>{
    return new Promise((resolve,reject) => {
        axios.get(`${configApp.API_URL}/api/packages/${id}`).then(response =>{
            resolve(response);
        }).catch(ex => {
            reject(ex);
        })
    });
}

/**
 * 
 * @returns {Promise}
 */
 export const getAllPackages = (id) =>{
    return new Promise((resolve,reject) => {
        axios.get(`${configApp.API_URL}/api/packages`).then(response =>{
            resolve(response);
        }).catch(ex => {
            reject(ex);
        })
    });
}


/**
 * 
 * @returns {Promise}
 */
 export const getPackagesByCategory = (id) =>{
    return new Promise((resolve,reject) => {
        axios.get(`${configApp.API_URL}/api/packages/category/${id}`).then(response =>{
            resolve(response);
        }).catch(ex => {
            reject(ex);
        })
    });
}