//module to use for getting absolute directory
const path = require('path');

//2 basic pieces of configuration for app to run
const config = {
  //1. entry property: the first file that should be executed when our app starts in the browser, s/b a relative path
  entry: './src/index.js',
  //2. output where to take bundled up modules and what to name it
  output: {
    //ref to directory to save bundle.js file, should be an absolute path
      //build: folder bundle.js is saved to
    path: path.resolve(__dirname, 'build'),
    //can be whatever you want to call it - bundle.js is standard
    filename: 'bundle.js'
  }
};

module.exports = config;
