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
      min: null,
      max: null,
    },
    square: {
      min: null,
      max: null,

    },
    price: {
      min: null,
      max: null,
    },

  },
  mutations: {
    updateApartmentsData(state, payload) {
      state.apartmentsData = payload;
    },
    filterRoom(state, payload) {
      state.currentRoom = payload;
    },
    filterMinFloor(state, payload) {
      state.floor.chosenFilterMin = payload;
    },
    filterMaxFloor(state, payload) {
      state.floor.chosenFilterMax = payload;
    },
    filterMinSquare(state, payload) {
      state.square.chosenFilterMin = payload;
    },
    filterMaxSquare(state, payload) {
      state.square.chosenFilterMax = payload;
    },
    filterMinPrice(state, payload) {
      state.price.chosenFilterMin = payload;
    },
    filterMaxPrice(state, payload) {
      state.price.chosenFilterMax = payload;
    },
    syncApartments(state) {
      state.apartments = state.apartmentsData.map((apartment) => ({
        ...apartment,
        img: '/img/plan.png',
      }));
    },
    setMaxValue(state, { data, type }) {
      let max = 0;
      data.forEach((el) => {
        if (el[type] > max) {
          max = el[type];
        }
      });
      state[type].max = max;
    },
    setMinValue(state, { data, type }) {
      let min = Infinity;
      data.forEach((el) => {
        if (el[type] < min) {
          min = el[type];
        }
      });
      state[type].min = min;
    },

  },
  getters: {
    prettyMaxPrice(state) {
      const MILLION = 1000000;
      return Math.ceil(state.price.max / MILLION);
    },
    prettyMinPrice(state) {
      const MILLION = 1000000;
      return Math.floor(state.price.min / MILLION);
    },
    prettyMinSquare(state) {
      return Math.floor(state.square.min);
    },
    prettyMaxSquare(state) {
      return Math.ceil(state.square.max);
    },

  },
  actions: {
    async loadApartmentsData(context) {
      return axios.get(API_BASE_URL)
        .then((response) => {
          context.commit('updateApartmentsData', response.data);
          context.commit('syncApartments');
          context.commit('setMaxValue', { data: response.data, type: 'floor' });
          context.commit('setMinValue', { data: response.data, type: 'floor' });
          context.commit('setMaxValue', { data: response.data, type: 'square' });
          context.commit('setMinValue', { data: response.data, type: 'square' });
          context.commit('setMaxValue', { data: response.data, type: 'price' });
          context.commit('setMinValue', { data: response.data, type: 'price' });
        }).catch((error) => console.log(error));
    },
  },
  modules: {
  },
});
