import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		birds: [],
		currentBird: {},
	},
	mutations: {
		SET_BIRDS(state, birds) {
			state.birds = birds;
		},
		SET_CURRENT_BIRD(state, bird) {
			state.currentBird = bird;
		},
	},
	actions: {
		setBirds({ commit }) {
			axios.get("https://aves.ninjas.cl/api/birds").then((response) => {
				commit("SET_BIRDS", response.data);
			});
		},
		setCurrentBird({ commit }, birdHref) {
			axios.get(birdHref).then((response) => {
				commit("SET_CURRENT_BIRD", response.data);
			});
		},
	},
	modules: {},
});
