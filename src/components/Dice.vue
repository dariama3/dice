<template>
  <div class="dice">
    <img class="dice__image" :src="dice" alt="Dice" v-if="dice">
    <button class="dice__button" type="button" @click="roll">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  data () {
    return {
      dice: false
    };
  },
  methods: {
    getImageSrc (index) {
      return require(`../assets/dice-${index}.png`);
    },
    roll () {
      const rollValue = Math.floor(Math.random() * 6);

      this.dice = this.getImageSrc(rollValue + 1);
    }
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

  &__image {
    max-width: 180px;
  }

  &__button {
    background: linear-gradient(to right, #ff6238, #ff724c, #ff6238);
    border: 2px solid;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    height: 85px;
    margin: 20px 0;
    transition: background 0.3s ease-in-out;
    width: 100%;

    &:hover {
      background: linear-gradient(to right, #ff724c, #ff6238, #ff724c)
    }
  }
}
</style>
