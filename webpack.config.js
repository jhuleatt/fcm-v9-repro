const path = require('path');

const rootConfig = {
  mode: 'development',
};

const appConfig = {
  ...rootConfig,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/scripts'),
  },
};

const serviceWorkerConfig = {
  ...rootConfig,
  entry: './src/firebase-messaging-sw.js',
  output: {
    filename: 'firebase-messaging-sw.js',
    path: path.resolve(__dirname, 'public')
  },
};

module.exports = [appConfig, serviceWorkerConfig];
