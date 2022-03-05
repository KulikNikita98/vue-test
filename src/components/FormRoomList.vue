<template>
  <ul class="form-rooms__list">
    <FormItem class="form-rooms__item">
      <FormItemInput label-for="room-s" label-class="form-rooms__label">
        <input
          type="radio"
          id="room-s"
          name="room"
          value="S"
          class="form-rooms__input"
        />
        <div class="form-rooms__input--custom">S</div>
      </FormItemInput>
    </FormItem>
    <FormItem class="form-rooms__item">
      <FormItemInput label-for="room-1" label-class="form-rooms__label">
        <input
          type="radio"
          id="room-1"
          name="room"
          value="S"
          class="form-rooms__input"
        />
        <div class="form-rooms__input--custom">1к</div>
      </FormItemInput>
    </FormItem>
    <FormItem class="form-rooms__item">
      <FormItemInput label-for="room-2" label-class="form-rooms__label">
        <input
          type="radio"
          id="room-2"
          name="room"
          value="S"
          class="form-rooms__input"
        />
        <div class="form-rooms__input--custom">2к</div>
      </FormItemInput>
    </FormItem>
    <FormItem class="form-rooms__item">
      <FormItemInput label-for="room-3" label-class="form-rooms__label">
        <input
          type="radio"
          id="room-3"
          name="room"
          value="S"
          class="form-rooms__input"
        />
        <div class="form-rooms__input--custom">3к</div>
      </FormItemInput>
    </FormItem>
  </ul>
</template>

<script>

import FormItem from '@/components/FormItem.vue';
import FormItemInput from '@/components/FormItemInput.vue';

export default {
  components: {
    FormItem,
    FormItemInput,
  },
};
</script>
