import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_BASE_URL } from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentRoom: '1k',
    apartments: [],
    apartmentsData: [],
    floor: {
      min: 1,
      max: 99,
    },
    square: {
      min: 99,
      max: 999,
    },
    price: {
      min: 9.9,
      max: 99.9,
    },

  },
  mutations: {
    updateApartmentsData(state, data) {
      state.apartmentsData = data;
    },
    filterRoom(state, data) {
      state.currentRoom = data;
    },
    filterMinFloor(state, data) {
      state.floor.min = data;
    },
    filterMaxFloor(state, data) {
      state.floor.max = data;
    },
    filterMinSquare(state, data) {
      state.square.min = data;
    },
    filterMaxSquare(state, data) {
      state.square.max = data;
    },
    filterMinPrice(state, data) {
      state.price.min = data;
    },
    filterMaxPrice(state, data) {
      state.price.max = data;
    },
    syncApartments(state) {
      state.apartments = state.apartmentsData;
    },
  },
  getters: {
    filteredApartments(state) {
      return state.apartments.filter((apartment) => {
        if ((apartment.size.toLowerCase() === state.currentRoom.toLowerCase())
          && (apartment.floor >= state.floor.min && apartment.floor.max <= state.floor.max)
          && (apartment.square >= state.square.min && apartment.square.max <= state.square.max)
          && (apartment.price >= state.price.min && apartment.price.max <= state.price.max)) {
          return apartment;
        }
        return false;
      });
    },
  },
  actions: {
    async loadApartmentsData(context) {
      return axios.get(API_BASE_URL)
        .then((response) => {
          context.commit('updateApartmentsData', response.data);
          context.commit('syncApartments');
        }).catch((error) => console.log(error));
    },
  },
  modules: {
  },
});
