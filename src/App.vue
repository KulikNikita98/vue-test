<template>
  <div class="">Hello,Vue!</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['loadApartmentsData']),
  },
  created() {
    this.loadApartmentsData();
  },
};
</script>
