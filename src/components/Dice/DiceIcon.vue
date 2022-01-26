<template>
  <svg
    class="dice-icon"
    :class="{ [`dice-icon--${value}`]: true }"
    viewBox="0 0 40 40"
    stroke="#000"
    stroke-width="1"
    aria-hidden="true"
  >
    <rect x="2" y="2" height="36" width="36" rx="4" ry="4" fill="none"/>
    <circle class="dice-icon__dot--1" cx="20" cy="20" r="2"/>
    <circle class="dice-icon__dot--2" cx="10" cy="10" r="2"/>
    <circle class="dice-icon__dot--3" cx="10" cy="20" r="2"/>
    <circle class="dice-icon__dot--4" cx="10" cy="30" r="2"/>
    <circle class="dice-icon__dot--5" cx="30" cy="10" r="2"/>
    <circle class="dice-icon__dot--6" cx="30" cy="20" r="2"/>
    <circle class="dice-icon__dot--7" cx="30" cy="30" r="2"/>
  </svg>
</template>

<script>
export default {
  name: 'DiceIcon',
  props: {
    value: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
.dice-icon {
  &--1 &__dot {
    &--2, &--3, &--4, &--5, &--6, &--7 {
      display: none;
    }
  }

  &--2 &__dot {
    &--1, &--3, &--4, &--5, &--6 {
      display: none;
    }
  }

  &--3 &__dot {
    &--3, &--4, &--5, &--6 {
      display: none;
    }
  }

  &--4 &__dot {
    &--1, &--3, &--6 {
      display: none;
    }
  }

  &--5 &__dot {
    &--3, &--6 {
      display: none;
    }
  }

  &--6 &__dot {
    &--1 {
      display: none;
    }
  }
}
</style>
