const mix = require('laravel-mix');

mix.js('src/app.js', 'js')
    .sass('src/scss/style.scss', 'css')
    .setPublicPath('public');