const mix = require('laravel-mix');

mix
  .setPublicPath('./public')
  .browserSync({
    https: true,
    proxy: 'accell.test',
  });

mix
  .sass('resources/styles/app.scss', 'styles')
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss')],
  });

mix
  .js('resources/scripts/app.js', 'scripts');

mix
  .copyDirectory('resources/fonts', 'public/fonts')
  .copyDirectory('resources/images', 'public/images');

mix
  .copy('resources/views/index.html', 'public');

mix
  .sourceMaps()
  .version();
