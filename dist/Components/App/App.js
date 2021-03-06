// Generated by CoffeeScript 1.10.0
var App, React,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

React = require('react');

App = (function(superClass) {
  extend(App, superClass);

  function App() {
    this.render = bind(this.render, this);
    return App.__super__.constructor.apply(this, arguments);
  }

  App.prototype.render = function() {
    return React.createElement("h1", null, "App!!");
  };

  return App;

})(React.Component);

module.exports = App;
