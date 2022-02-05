<template>
  <div class="dice">
    <button class="dice__button" type="button" title="Roll the Dice!" @click="roll">
      <DiceIcon :value="diceValue" />
      <span class="dice__label" v-if="!diceValue">Play</span>
    </button>
    <DiceResult :value="diceValue" />
  </div>
</template>

<script>
import DiceIcon from './Dice/DiceIcon';
import DiceResult from './Dice/DiceResult';
import Shake from 'shake.js';

export default {
  name: 'Dice',
  components: {
    DiceIcon,
    DiceResult
  },
  data () {
    return {
      diceValue: 0
    };
  },
  methods: {
    roll () {
      this.diceValue = Math.floor(Math.random() * 6) + 1;

      window.navigator.vibrate(100);
    },
    initShake () {
      const myShakeEvent = new Shake({
        threshold: 10
      });

      myShakeEvent.start();

      window.addEventListener('shake', this.roll);
    }
  },
  mounted () {
    this.initShake();
  },
  unmounted () {
    window.removeEventListener('shake', this.roll);
  }
};
</script>

<style lang="scss" scoped>
.dice {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  &__button {
    background: none;
    border: none;
    cursor: pointer;
    max-width: 300px;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
  }

  &__label {
    font-size: 5rem;
    left: 50%;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
