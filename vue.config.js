/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Dice',
      description: 'Application to roll the dice by click or shake'
    }
  }
};
