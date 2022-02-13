/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  pwa: {
    name: 'Dice',
    themeColor: '#cc8056',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#cc8056',
    manifestOptions: {
      background_color: '#cc8056'
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Dice',
      description: 'Application to roll the dice by click or shake'
    }
  }
};
