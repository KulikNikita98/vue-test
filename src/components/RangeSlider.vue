<template>
    <v-range-slider
    v-model="values"
    step="0"
    track-fill-color="#70D24E"
    thumb-color="#70D24E"
    track-color="#D8D8D8"
    hide-details="true"
  ></v-range-slider>
</template>

<script>
export default {
  props: ['minValue', 'maxValue'],

  computed: {
    values: {
      get() {
        return [this.minValue, this.maxValue];
      },
      set(value) {
        this.$emit('update:minValue', value[0]);
        this.$emit('update:maxValue', value[1]);
      },
    },
  },
};
</script>
