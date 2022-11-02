<template>
  <c-button type="warning" @click="handlePromise">loading</c-button>
</template>
<script>
  export default {
    setup() {
      const handlePromise = () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });

      return {
        handlePromise,
      };
    },
  };
</script>