const webpack = require('webpack')
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

const clientCompiler = webpack(webpackClientConfig)
const serverCompiler = webpack(webpackServerConfig)

const hmrServer = express()


hmrServer.use(webpackDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  writeToDisk: true,
  stats: 'errors-only',
}))

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr'
}))

if (IS_DEV) {
  hmrServer.listen(3001, () => {
    console.log('HMR server is running on localhost:3001');
  })
}

serverCompiler.run((err) => {
  console.log(`compilation started`)

  if (err) {
    console.log(`compilation failed:`, err)
  }

  serverCompiler.watch({}, (err) => {

    if (err) {
      console.log(`compilation failed:`, err)
    }

    console.log('Compilation was successfully \n----------------------------\n')
  });

  if (IS_DEV) {

    nodemon({
      script: path.resolve(__dirname, '../dist/server/server.js'),
      watch: [
        path.resolve(__dirname, '../dist/server'),
        path.resolve(__dirname, '../dist/client')
      ]
    })
  }

  serverCompiler.close((closeErr) => {
    if (closeErr) {
      console.log(closeErr);
    }
  })
})