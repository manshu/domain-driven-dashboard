const mix = require('laravel-mix')
require('laravel-mix-merge-manifest')

// Frontend
mix
  .js('resources/frontend/js/app.js', 'public/frontend/js/')
  .postCss('resources/frontend/css/app.css', 'public/frontend/css/', [
    require('tailwindcss'),
  ])
  .mergeManifest()
