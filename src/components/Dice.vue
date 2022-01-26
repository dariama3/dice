<template>
  <div class="dice">
    <button class="dice__button" type="button" title="Roll the Dice!" @click="roll">
      <DiceIcon :value="diceValue" />
    </button>
  </div>
</template>

<script>
import DiceIcon from './Dice/DiceIcon';

export default {
  name: 'Dice',
  components: {
    DiceIcon
  },
  data () {
    return {
      diceValue: undefined
    };
  },
  methods: {
    roll () {
      this.diceValue = Math.floor(Math.random() * 6) + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.dice {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  &__button {
    background: none;
    border: none;
    cursor: pointer;
    max-width: 300px;
  }
}
</style>
