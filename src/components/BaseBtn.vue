<template>
   <button  :type="type">{{text}}</button>
</template>

<script>
export default {
  props: ['type', 'text'],

};
</script>

<style lang="scss">
  .form {
    &-btns {
      &__btn {
        &--reset {
          margin-top: 15px;
          width: fit-content;
          padding-bottom: 3px;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0em;
          color: #2C323A;
          text-transform: uppercase;
          border-bottom: 1px solid #70D24E;
        }
        &--submit {
          padding: 5px;
          width: 201px;
          height: 40px;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 28px;
          letter-spacing: 0em;
          color: #fff !important;
          border-radius: 5px;
          background-color: #70D24E;
        }
      }
    }
  }
</style>
