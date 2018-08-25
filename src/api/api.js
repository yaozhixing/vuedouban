import Vue from 'vue'
import store from '../store'
import axios from 'axios'

axios.interceptors.request.use( (config) => {
	console.log("axios请求前执行...");
	store.dispatch("modifyLoadnFn",{ sta: true });
	return config;
})

axios.interceptors.response.use( (config) => {
	console.log("axios请求后...");
	store.dispatch("modifyLoadnFn",{ sta: false });
	return config;
})

export default axios