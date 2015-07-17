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
  ], ['server']);

  api.addFiles([
    'js/base.min.js',
    'css/base.min.css'
  ], ['client']);

});
