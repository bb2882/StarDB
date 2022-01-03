const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },

      //shows where you made mistake in console, helpful while debugging
      devtool: 'eval',
      //starting webpack again everytime you make changes in code
      watch: true,
}