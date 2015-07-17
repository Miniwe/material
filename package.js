Package.describe({
  name: 'miniwe:daemonite-material',
  version: '1.1.1',
  summary: 'HTML5 UI design based on Google Material',
  git: 'https://github.com/Miniwe/material.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'jquery'
  ], ['client']);

  api.use([
    'fourseven:scss'
  ], ['client', 'server']);

  api.addFiles([
    // whole
    // 'js/base.min.js',
    // 'css/base.min.css'
    'css/fonts/FontAwesome.otf',
    'css/fonts/MaterialIcons-Regular.eot',
    'css/fonts/MaterialIcons-Regular.ttf',
    'css/fonts/MaterialIcons-Regular.woff',
    'css/fonts/MaterialIcons-Regular.woff2',
    'css/fonts/fontawesome-webfont.eot',
    'css/fonts/fontawesome-webfont.svg',
    'css/fonts/fontawesome-webfont.ttf',
    'css/fonts/fontawesome-webfont.woff',
    'css/fonts/fontawesome-webfont.woff2',
    'js/src/_.js',
    'js/src/bootstrap.js',
    'js/src/content.js',
    'js/src/datepicker.js',
    'js/src/dropdown.js',
    'js/src/esc.js',
    'js/src/footer.js',
    'js/src/form-adv.js',
    'js/src/get-target.js',
    'js/src/header.js',
    'js/src/menu.js',
    'js/src/modal.js',
    'js/src/tab.js',
    'js/src/tile.js',
    'js/src/toast.js',
    'js/src/waves.js',
    'js/src/webfont.js',
    'js/src/winresize.js',
    'sass/base.custom.scss'
  ], ['client']);

});
