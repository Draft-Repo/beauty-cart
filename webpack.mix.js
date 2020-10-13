const mix = require('laravel-mix');
const path = require('path');

mix.react('resources/js/admin.js', 'public/admin/js').webpackConfig({
    output: {
        chunkFilename: 'admin/js/[name].js',
    },
});


