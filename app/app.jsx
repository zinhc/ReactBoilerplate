var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation 因為不知道載入的是css檔案 所以要在開頭加上css! css-loader,表示是css檔案
//style 是 css
//require('style!css!foundation-sites/dist/foundation.min.css') 已經在webpackConfig.js加入sassLoader
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate3 projects</p>,
  document.getElementById('app')
);
