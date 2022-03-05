<template>
  <div>
    <main class="main">
      <section class="filter">
        <div class="container filter__container">
          <h1 class="filter__title">Lorem ipsum dolor sit</h1>
          <form action="#!" class="filter__form filter-form">
            <ul class="filter-form__list">
              <FormFilterItem class="filter-form__item form-rooms">
                <FormTitle title="Комнаты"  class="form-title form-rooms__title"/>
                <FormRoomList />
              </FormFilterItem>
                <FormFilterItem class="filter-form__item form-floors">
                   <FormTitle title="Этаж"  class="form-title form-floors__title"/>
                   </FormFilterItem>
                <FormFilterItem class="filter-form__item form-square">
                   <FormTitle title="Площадь, m2"
                   class="form-title form-square__title"/>
                   </FormFilterItem>
                <FormFilterItem class="filter-form__item form-price">
                   <FormTitle title="СТОИМОСТЬ, млн. р."  class="form-title form-price__title"/>
                   </FormFilterItem>

            </ul>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import FormTitle from '@/components/FormTitle.vue';
import FormFilterItem from '@/components/FormFilterItem.vue';
import FormRoomList from '@/components/FormRoomList.vue';

export default {
  name: 'App',
  components: {
    FormTitle,
    FormFilterItem,
    FormRoomList,
  },
  methods: {
    ...mapActions(['loadApartmentsData']),
  },
  created() {
    this.loadApartmentsData();
  },
};
</script>
