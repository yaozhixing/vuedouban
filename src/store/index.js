import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex)

const store = new Vuex.Store({

	modules:{},
	state:{
		isloading:false
	},
	getters:{
		changeLoad(state){
			return state.isloading
		}
	},
	mutations:{
		modifyLoad(state, payload){
			state.isloading = payload.sta
		}
	},

	actions:{
		modifyLoadnFn({state, commit}, payload){
			commit('modifyLoad', payload)
		}
	}

})

export default store;