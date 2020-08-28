import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		birds: [],
	},
	mutations: {
		SET_BIRDS(state, birds) {
			state.birds = birds;
		},
	},
	actions: {
		setBirds({ commit }) {
			axios.get("https://aves.ninjas.cl/api/birds").then((response) => {
				commit("SET_BIRDS", response.data);
			});
		},
	},
	modules: {},
});
