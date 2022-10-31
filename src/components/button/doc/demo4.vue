<template>
  <c-button type="warning" size="sm" round :loading="true">loading</c-button>
  <c-button type="danger" round :loading="true">loading</c-button>
  <c-button type="info" round plain :loading="true">loading</c-button>
  <c-button
    type="success"
    plain
    :loading="loading1"
    @click="handerClick1"
    icon="c-icon-heart-on"
    >loading</c-button>
  <c-button type="primary" :loading="loading2" @click="handerClick2">Click loading</c-button>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const loading1 = ref(false);
      const loading2 = ref(false);

      const handerClick1 = () => {
        loading1.value = true;

        setTimeout(() => {
          loading1.value = false;
        }, 3000);
      };

      const handerClick2 = () => {
        loading2.value = true;

        setTimeout(() => {
          loading2.value = false;
        }, 3000);
      };

      return {
        loading1,
        loading2,
        handerClick1,
        handerClick2,
      };
    },
  };
</script>