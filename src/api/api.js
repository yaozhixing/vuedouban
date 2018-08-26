import Vue from 'vue'
import store from '../store'
import axios from 'axios'

axios.interceptors.request.use( (config) => {
	store.dispatch("modifyLoadnFn",{ sta: true });
	return config;
})

axios.interceptors.response.use( (config) => {
	store.dispatch("modifyLoadnFn",{ sta: false });
	return config;
})

export default axios