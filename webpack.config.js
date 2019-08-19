// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "dist/bundle.js"
//   },
//   devtool: "sourcemap"
// };

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
