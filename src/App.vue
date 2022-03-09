<template>
  <v-app class="app">
    <v-main class="main pa-8  white">
      <section class="filter">
        <v-container class="container filter__container">
          <h1 class="main-title filter__title">Lorem ipsum dolor sit</h1>
          <FilterForm
            :currentRooms.sync="currentRooms"
            :currentMinFloor.sync="currentMinFloor"
            :currentMaxFloor.sync="currentMaxFloor"
            :currentMinSquare.sync="currentMinSquare"
            :currentMaxSquare.sync="currentMaxSquare"
            :currentMinPrice.sync="currentMinPrice"
            :currentMaxPrice.sync="currentMaxPrice"
          />
        </v-container>
      </section>
      <section class="content">
        <v-container class="container content__container">
          <h2 class="content__title visually-hidden">Квартиры</h2>
          <v-row >
            <ApartmentItem
              v-for="apartment in filteredApartments"
              :key="apartment.id"
              :apartment="apartment"
            />
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import FilterForm from '@/components/FilterForm.vue';
import ApartmentItem from '@/components/ApartmentItem.vue';

export default {
  data() {
    return {
      currentApartments: [],
      currentRooms: ['1k'],
      currentMinFloor: 0,
      currentMaxFloor: 0,
      currentMinSquare: 0,
      currentMaxSquare: 0,
      currentMinPrice: 0,
      currentMaxPrice: 0,
    };
  },
  name: 'App',
  components: {
    FilterForm,
    ApartmentItem,
  },

  watch: {
    '$store.state.apartments': function (value) {
      this.currentApartments = value;
    },
    '$store.state.currentRooms': function (value) {
      this.currentRooms = value;
    },
    '$store.state.floor.min': function (value) {
      this.currentMinFloor = value;
    },
    '$store.state.floor.max': function (value) {
      this.currentMaxFloor = value;
    },
    '$store.state.square.min': function (value) {
      this.currentMinSquare = Math.floor(value);
    },
    '$store.state.square.max': function (value) {
      this.currentMaxSquare = Math.ceil(value);
    },
    '$store.state.price.min': function (value) {
      this.currentMinPrice = value;
    },
    '$store.state.price.max': function (value) {
      this.currentMaxPrice = value;
    },
  },
  methods: {
    ...mapActions(['loadApartmentsData']),
    ...mapMutations(['setMaxValue', 'setMinValue']),
  },
  computed: {
    filteredApartments() {
      let filteredArray = this.currentApartments || [];
      filteredArray = filteredArray
        .filter((apartment) => this.currentRooms
          .find((currentRoom) => apartment.size.toLowerCase() === currentRoom.toLowerCase()));

      if (this.currentMinFloor && this.currentMaxFloor) {
        filteredArray = filteredArray
          .filter((apartment) => apartment.floor >= this.currentMinFloor
          && apartment.floor <= this.currentMaxFloor);
      }
      if (this.currentMinSquare && this.currentMaxSquare) {
        filteredArray = filteredArray
          .filter((apartment) => apartment.square >= this.currentMinSquare
          && apartment.floor <= this.currentMaxSquare);
      }

      if (this.currentMinPrice && this.currentMaxPrice) {
        filteredArray = filteredArray
          .filter((apartment) => apartment.price >= this.currentMinPrice
           && apartment.price <= this.currentMaxPrice);
      }
      return filteredArray;
    },
  },
  created() {
    this.loadApartmentsData();
    this.currentApartments = this.$store.state.apartments;
  },
};
</script>

<style lang="scss" >

.app {
  border-radius: 10px;
}
body {
  padding: 80px;
  font-family: "Roboto";
  background-color: #2f2e2d;
  color: #2C323A;

}
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

.content {
  padding-top: 50px;
  padding-bottom: 100px;
}

.v-main {
  &__wrap {
    max-height: 1550px;
    background-color: #F8F8F8;
    border-radius: 10px;
  }
}

  ul, ol {
    list-style: none;
  }

.main-title {
  font-size: 34px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
}
.filter {
  &__title {
    margin-bottom: 50px;
  }
}

  .visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}

</style>
