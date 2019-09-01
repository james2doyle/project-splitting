const { resolve } = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      modules: [
        resolve(__dirname, '../packages/components/')
      ],
      alias: {
        Functions: resolve(__dirname, '../packages/functions/')
      }
    }
  }
}
