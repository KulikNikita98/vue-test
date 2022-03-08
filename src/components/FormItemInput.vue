<template>
    <input class="form-rooms__input"
    :type="type" :checked="room === value" :name="inputName"
    :value="value" @change="updateValue" :id="id">
</template>

<script>
export default {
  model: {
    prop: 'room',
    event: 'updateValue',
  },
  data() {
    return {

    };
  },
  props: ['inputName', 'value', 'id', 'type', 'room'],
  computed: {

  },
  methods: {
    updateValue(e) {
      this.$emit('updateValue', e.target.value);
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
</style>
