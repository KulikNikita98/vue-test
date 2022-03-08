<template>
  <div>
    <main class="main">
      <section class="filter">
        <div class="container filter__container">
          <h1 class="main-title filter__title">Lorem ipsum dolor sit</h1>
          <FilterForm
            :currentRoom.sync="currentRoom"
            :currentMinFloor.sync="currentMinFloor"
            :currentMaxFloor.sync="currentMaxFloor"
            :currentMinSquare.sync="currentMinSquare"
            :currentMaxSquare.sync="currentMaxSquare"
            :currentMinPrice.sync="currentMinPrice"
            :currentMaxPrice.sync="currentMaxPrice"
          />
        </div>
      </section>
      <section class="content">
        <div class="container content__container">
          <h2 class="content__title visually-hidden">Квартиры</h2>
          <ul class="content__list">
            <ApartmentItem
              v-for="apartment in filteredApartments"
              :key="apartment.id"
              :apartment="apartment"
            />
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import FilterForm from '@/components/FilterForm.vue';
import ApartmentItem from '@/components/ApartmentItem.vue';

export default {
  data() {
    return {
      currentApartments: [],
      currentRoom: '1k',
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
    '$store.state.currentRoom': function (value) {
      this.currentRoom = value;
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
      console.log(filteredArray);
      filteredArray = filteredArray
        .filter((apartment) => apartment.size.toLowerCase() === this.currentRoom.toLowerCase());

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
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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

  ul, ol {
    list-style: none;
  }

.main {
  padding: 30px;
  max-height: 1200px;
  overflow-y: auto;
  border-radius: 10px;
  background-color: #fff;
}

.filter {
  padding-top: 40px;
  background-color:#F8F8F8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.content {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color:#F8F8F8;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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

.content {
  &__list {
    display: flex;
    flex-wrap: wrap;
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
