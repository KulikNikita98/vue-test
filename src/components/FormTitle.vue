<template>
  <h2 class="filter-form__title">
    {{title}}
    <slot></slot>
  </h2>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss">
  .filter-form {
    &__title {
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  color: #2C323A;
  text-transform: uppercase;
    }
  }
</style>
