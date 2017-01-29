var path = require('path');

module.exports = {
  entry: './index.js',
  resolve: {
    root: [
      "node_modules",
      path.resolve(__dirname, "src/js")
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
