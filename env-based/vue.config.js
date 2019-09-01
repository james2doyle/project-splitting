const { resolve } = require('path');
const theme = process.env.THEME;

module.exports = {
  outputDir: `./${theme}/dist`,
  configureWebpack: {
    entry: {
      app: [
        `./${theme}/src/main.js`
      ]
    },
    resolve: {
      modules: [
        resolve(__dirname, './packages/components/'),
        resolve(__dirname, `./${theme}/src/`)
      ],
      alias: {
        Functions: resolve(__dirname, './packages/functions/')
      }
    }
  }
}
