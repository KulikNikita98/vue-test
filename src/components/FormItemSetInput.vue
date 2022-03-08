<template>
  <input :type="type" :min="min" :max="max" @input="updateValue"
  :value="value"
  >
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'changeValue',
  },
  props: ['type', 'min', 'max', 'value'],
  methods: {
    updateValue(e) {
      this.$emit('changeValue', e.target.value);
    },
  },
};
</script>

<style lang="scss">
  .form {
    &-input {
      padding: 5px;
      width: 80px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #D8D8D8;
      border-radius: 5px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      color: #2C323A;
      text-align: center;
    }
  }
</style>
