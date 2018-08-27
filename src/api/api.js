import Vue from 'vue'
import store from '../store'
import axios from 'axios'

let loadAllAxios = [];
let loadCount = 0;

axios.interceptors.request.use( (config) => {
	//loadAllAxios.push("axiosarr" + (loadCount++));
	store.dispatch("modifyLoadnFn",{ sta: true });
	return config;
})

axios.interceptors.response.use( (config) => {
	store.dispatch("modifyLoadnFn",{ sta: false });
	return config;
})

/*Promise.all(loadAllAxios).then((res) => {
	console.log(loadCount);
	store.dispatch("modifyLoadnFn",{ sta: false });
}).catch( error => {
	console.log(error)
})*/

export default axios