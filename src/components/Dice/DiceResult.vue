<template>
  <span
    class="dice-result"
    :class="{ 'dice-result--hidden': !value }"
  >
    Your result is {{ value }}
  </span>
</template>

<script>
export default {
  name: 'DiceResult',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.dice-result {
  font-size: 2rem;
  font-weight: 700;

  &--hidden {
    visibility: hidden;
  }
}
</style>
