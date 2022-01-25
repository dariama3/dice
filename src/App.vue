<template>
  <Dice />
</template>

<script>
import Dice from './components/Dice.vue';

export default {
  name: 'App',
  components: {
    Dice
  }
};
</script>

<style lang="scss">
body {
  background: rgb(202, 103, 45);
  margin: 0;
}
</style>
