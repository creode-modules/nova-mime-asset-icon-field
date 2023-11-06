let mix = require('laravel-mix')

require('./nova.mix')
require('laravel-mix-svg-vue');

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/field.css', 'css')
  .nova('creode/MimeTypeAssetField')
  .svgVue();

