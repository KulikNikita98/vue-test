<template>
  <form @submit.prevent="submit" @reset.prevent="reset"
  action="#!" class="filter__form filter-form">
    <ul class="filter-form__list">
      <FormFilterItem class="filter-form__item form-rooms">
        <div class="filter-form__outer-wrapper">
               <FormTitle title="Комнаты" class="form-title form-rooms__title" />
        <ul class="form-rooms__list">
          <FormItem class="form-rooms__item">
            <label for="room-s" class="form-rooms__label">
              <input class="form-rooms__input"
                :checked="rooms.find(room=> room === 'XS')"
                id="room-s"
                name="room-s"
                value="XS"
                type="checkbox"
                v-model="rooms"
                >
              <div class="form-rooms__input--custom">S</div>
            </label>
          </FormItem>
          <FormItem class="form-rooms__item">
            <label for="room-1" class="form-rooms__label">
              <input class="form-rooms__input"
                :checked="rooms.find(room=> room == '1k')"
                id="room-1"
                name="room-1"
                value="1k"
                type="checkbox"
                v-model="rooms"
                >
              <div class="form-rooms__input--custom">1к</div>
            </label>
          </FormItem>
          <FormItem class="form-rooms__item">
            <label class="form-rooms__label" for="room-2">
              <input class="form-rooms__input"
                :checked="rooms.find(room=> room === '2k')"
                id="room-2"
                name="room-2"
                type="checkbox"
                value="2k"
                v-model="rooms"
                >
              <div class="form-rooms__input--custom">2к</div>
            </label>
          </FormItem>
          <FormItem class="form-rooms__item">
            <label class="form-rooms__label" for="room-3">
              <input class="form-rooms__input"
                :checked="rooms.find(room=> room === '3k')"
                id="room-3"
                name="room-3"
                value="3k"
                type="checkbox"
                v-model="rooms"
                >
              <div class="form-rooms__input--custom">3к</div>
            </label>
          </FormItem>
        </ul>
        </div>
      </FormFilterItem>
      <FormFilterItem class="filter-form__item form-floors">
        <div class="filter-form__outer-wrapper">
        <FormTitle title="Этаж" class="form-title form-floors__title" />
        <div class="form-floors__wrapper">
          <FormItemSetInput
            type="text"
            :min="$store.state.floor.min"
            :max="$store.state.floor.max"
            class="form-floors__input form-floors__input--min form-input"
            v-model="minFloor"
          />
          <div class="filter-form__separator">-</div>
          <FormItemSetInput
            type="text"
            :min="$store.state.floor.min"
            :max="$store.state.floor.max"
            class="form-floors__input form-floors__input--max form-input"
            v-model="maxFloor"
          />
        </div>
          <RangeSlider :minValue.sync="minFloor"  :maxValue.sync="maxFloor" />
        </div>
      </FormFilterItem>
      <FormFilterItem class="filter-form__item form-square">
        <div class="filter-form__outer-wrapper">
          <FormTitle title="Площадь" class="form-title form-square__title">
          <span class="form__additional-text">, m<sup>2</sup></span>
        </FormTitle>
        <div class="form-square__wrapper">
          <FormItemSetInput
            type="text"
            :min="prettyMinSquare"
            :max="prettyMaxSquare"
            class="form-square__input form-square__input--min form-input"
            v-model="fixedMinSquare"
          />
          <div class="filter-form__separator">-</div>
          <FormItemSetInput
            type="text"
            :min="prettyMinSquare"
            :max="prettyMaxSquare"
            class="form-square__input form-square__input--max form-input"
            v-model="fixedMaxSquare"
          />
        </div>
        <RangeSlider :minValue.sync="fixedMinSquare"  :maxValue.sync="fixedMaxSquare" />
        </div>
      </FormFilterItem>
      <FormFilterItem class="filter-form__item form-price">
        <div class="filter-form__outer-wrapper">
        <FormTitle
          title="СТОИМОСТЬ"
          class="form-title form-price__title"
        >
        <span class="form__additional-text">, млн. р.</span>
        </FormTitle>
        <div class="form-price__wrapper">
          <FormItemSetInput
            type="text"
            :min="prettyMinPrice"
            :max="prettyMaxPrice"
            class="form-price__input form-price__input--min form-input"
            v-model="fixedMinPrice"
          />
          <div class="filter-form__separator">-</div>
          <FormItemSetInput
            type="text"
            :min="prettyMinPrice"
            :max="prettyMaxPrice"
            class="form-price__input form-price__input--max form-input"
            v-model="fixedMaxPrice"
          />
        </div>
        <RangeSlider :minValue.sync="fixedMinPrice"  :maxValue.sync="fixedMaxPrice" />
        </div>
      </FormFilterItem>

      <FormFilterItem class="filter-form__item form-btns">
        <BaseBtn
          class="form-btns__btn form-btns__btn--submit"
          type="submit"
          text="Применить"
        />
        <BaseBtn
          type="reset"
          class="form-btns__btn form-btns__btn--reset"
          text="Сбросить Фильтр"
        />
      </FormFilterItem>
    </ul>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';
import FormTitle from '@/components/FormTitle.vue';
import FormFilterItem from '@/components/FormFilterItem.vue';
import FormItem from '@/components/FormItem.vue';
import FormItemSetInput from '@/components/FormItemSetInput.vue';
import BaseBtn from '@/components/BaseBtn.vue';
import RangeSlider from '@/components/RangeSlider.vue';

export default {
  data() {
    return {
      maxPrice: this.currentMaxPrice || 0,
      minPrice: this.currentMinPrice || 0,
      minFloor: this.currentMinFloor || 0,
      maxFloor: this.currentMaxFloor || 0,
      maxSquare: this.currentMaxSquare || 0,
      minSquare: this.currentMinSquare || 0,
      rooms: this.currentRooms,
    };
  },
  props: ['currentMaxPrice', 'currentMinPrice', 'currentMaxSquare',
    'currentMinSquare', 'currentMaxFloor', 'currentMinFloor', 'currentRooms'],
  components: {
    FormTitle,
    FormFilterItem,
    FormItem,
    FormItemSetInput,
    BaseBtn,
    RangeSlider,
  },

  watch: {
    currentRooms(value) {
      this.rooms = value;
    },
    currentMinFloor(value) {
      this.minFloor = value;
    },
    currentMaxFloor(value) {
      this.maxFloor = value;
    },
    currentMinSquare(value) {
      this.minSquare = Math.floor(value);
    },
    currentMaxSquare(value) {
      this.maxSquare = Math.ceil(value);
    },
    currentMinPrice(value) {
      this.minPrice = value;
    },
    currentMaxPrice(value) {
      this.maxPrice = value;
    },
  },

  methods: {
    submit() {
      this.$emit('update:currentMaxPrice', this.maxPrice);
      this.$emit('update:currentMinPrice', this.minPrice);
      this.$emit('update:currentMaxSquare', this.maxSquare);
      this.$emit('update:currentMinSquare', this.minSquare);
      this.$emit('update:currentMaxFloor', this.maxFloor);
      this.$emit('update:currentMinFloor', this.minFloor);
      this.$emit('update:currentRooms', this.rooms);
    },

    reset() {
      this.$emit('update:currentMaxPrice', this.$store.state.price.max);
      this.$emit('update:currentMinPrice', this.$store.state.price.min);
      this.$emit('update:currentMaxSquare', this.$store.state.square.max);
      this.$emit('update:currentMinSquare', this.$store.state.square.min);
      this.$emit('update:currentMaxFloor', this.$store.state.floor.max);
      this.$emit('update:currentMinFloor', this.$store.state.floor.min);
      this.$emit('update:currentRooms', this.$store.state.currentRooms);
    },
  },

  computed: {
    ...mapGetters([
      'prettyMaxPrice',
      'prettyMinPrice',
      'prettyMinSquare',
      'prettyMaxSquare',
    ]),

    fixedMinSquare: {
      get() {
        return Math.floor(this.minSquare);
      },
      set(value) {
        this.minSquare = value;
      },
    },
    fixedMaxSquare: {
      get() {
        return Math.ceil(this.maxSquare);
      },
      set(value) {
        this.maxSquare = value;
      },
    },
    fixedMinPrice: {
      get() {
        const MILLION = 1000000;
        return Math.floor(this.minPrice / MILLION);
      },
      set(value) {
        const MILLION = 1000000;
        this.minPrice = value * MILLION;
      },
    },
    fixedMaxPrice: {
      get() {
        const MILLION = 1000000;
        return Math.ceil(this.maxPrice / MILLION);
      },
      set(value) {
        const MILLION = 1000000;
        this.maxPrice = value * MILLION;
      },

    },
  },
};
</script>

<style lang="scss">

  .form {
    &-rooms {
      &__input {
        display: none;
        &:checked + &--custom {
          background: #70D24E;
          color: #fff;
        }
      }
    }
  }
.filter-form {
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__item {
    &:not(:last-child) {
      display: flex;
      align-items: center;
    .form-rooms__input--custom {
        margin-right: 4px;
      }

    &::after {
      content: "";
      display: block;
      margin: 0 30px;
      margin-top: 25px;
      height: 20px;
      width: 1px;
      background-color: #EBEBEB;
    }
    }
  }
  &__separator {
    margin: 0 5px;
    font-size: 12px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: #2C323A;
  }
}

.form {
  &-btns {
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-rooms {
    &__list {
      display: flex;
    }

    &__input {
      &--custom {
      padding: 5px;
      width: 47px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #D8D8D8;
      border-radius: 5px;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      color: #2C323A;
      text-align: center;
      cursor: pointer;

      }
    }
  }
  &__additional {
    &-text {
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      color: #2C323A;
      text-transform: lowercase;
    }
  }

  &-square {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-price {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-floors {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

</style>
