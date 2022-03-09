<template>
  <v-col class="col-3">
    <article  @mouseenter="mouseEnterCard"
    @mouseleave="mouseLeaveCard" class="content__article apartment">
      <div class="apartment__top">
        <div class="apartment__floor">{{apartment.floor}} этаж</div>
        <div class="apartment__top-wrapper">
          <div class="apartment__room">{{apartment.rooms}} комната</div>
          <div class="apartment__square"> {{apartment.square}} м <sup>2</sup></div>
        </div>
      </div>
      <div class="apartment__middle">
        <div class="apartment__id">№ {{apartment.building_id}}</div>
        <img :src="apartment.img" :alt="apartment.building_name" class="apartment__img" />
      </div>
      <div class="apartment__bottom">
        <h3 class="apartment__price">{{formattedPrice(prettyPrice)}} р.</h3>
        <small class="apartment__square-price">
          {{formattedPrice(priceForSquare)}} р. за м <sup>2</sup></small>
        <BaseBtn text="ПОДРОБНЕЕ"
        v-show="isActive"  class="apartment__detailed"> </BaseBtn>
      </div>
    </article>
  </v-col>
</template>

<script>

import formattedPrice from '@/helpers/formattedPrice';
import BaseBtn from '@/components/BaseBtn.vue';

export default {
  props: ['apartment'],
  components: {
    BaseBtn,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    formattedPrice,
    mouseEnterCard() {
      this.isActive = true;
    },
    mouseLeaveCard() {
      this.isActive = false;
    },

  },
  computed: {
    priceForSquare() {
      return Math.ceil(this.apartment.price / this.apartment.square);
    },
    prettyPrice() {
      return Math.ceil(this.apartment.price);
    },
  },

};
</script>

<style lang="scss">

  .apartment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 270px;
    background: #FFFFFF;
    box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
    border-radius: 10px;
      transition-property: box-shadow;
        transition-timing-function: ease-in-out;
        transition-duration: .3s;
      &:hover {
        box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.25);
        transition-property: box-shadow;
        transition-timing-function: ease-in-out;
        transition-duration: .3s;
      }
      &:hover &__middle {
          margin-bottom: 0;
          padding-bottom: 0;

        }
    &__top {
      display: flex;
      justify-content: space-between;
      &-wrapper {
        display: flex;
      }
    }

    &__floor {
      font-size: 12px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      color: rgba(#2C323A, .5);
    }

    &__img {
      object-fit: cover;
      width: 100%;
    }

    &__room {
     font-size: 12px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: #2C323A;
    &::after {
      content: "-";
      margin: 0 10px;
      font-size: 12px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
     color: rgba(#2C323A, .5);

    }
  }
    &__square {
    font-size: 12px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: #2C323A;
    }

    &__middle {
      margin-bottom: 10px;
      position: relative;
      padding: 30px 10px;
      background: #FFFFFF;
      border: 1px solid #EBEBEB;
      border-radius: 5px;
    }

    &__id {
      padding-right: 5px;
      padding-top: 5px;
      position: absolute;
      padding-left: 5px;
      padding-bottom: 5px;
      top: 0;
      right: 0;
      border-bottom: 1px solid #EBEBEB;
      border-left: 1px solid #EBEBEB;
      border-bottom-left-radius: 5px;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0em;
      color: #2C323A;
    }
    &__price {
    margin-left: auto;
    width: fit-content;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    color: #2C323A;
    }

    &__square-price {
      display: block;
      height: fit-content;
      margin-left: auto;
      width: fit-content;
      font-size: 12px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      color: rgba(#2C323A, .5);
    }

    &__detailed {
      padding: 5px;
      width: 100%;
      height: 40px;
      font-size: 14px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      color: #FFFFFF;
      background-color: #70D24E;
      border-radius: 2px 2px 5px 5px;
      text-align: center;
    }

    &__bottom {
      display: flex;
      flex-direction: column;
    }
  }
</style>
