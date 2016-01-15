Package.describe({
  name: 'miniwe:daemonite-material',
  version: '1.2.1',
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

  // api.addAssets([
  //   'css/fonts/MaterialIcons-Regular.eot',
  //   'css/fonts/MaterialIcons-Regular.ijmap',
  //   'css/fonts/MaterialIcons-Regular.ttf',
  //   'css/fonts/MaterialIcons-Regular.woff',
  //   'css/fonts/MaterialIcons-Regular.woff2',
  // ], ['client']);

  api.addFiles([
    'js/base.min.js',
    'assets/sass/base.custom.scss'
  ], ['client'], {base: true});

});
