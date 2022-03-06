const path = require('path')
const mix = require('laravel-mix')
const nodeExternals = require('webpack-node-externals')

require('laravel-mix-merge-manifest')

mix
  .js('resources/frontend/js/server.js', 'public/frontend/js/')
  .react()
  .alias({ '@': path.resolve('resources/frontend/js/') })
  .webpackConfig({
    target: 'node',
    externals: [nodeExternals()],
  })
  .mergeManifest()
