/*
 * Renderer for Mustache
 * Based on Mustache.js - https://github.com/janl/mustache.js 
*/
var mustache = require("mustache");

function MustacheRenderer(){
  this.afterRender = null;
  this.template = null;
  this.content = null;
};

MustacheRenderer.prototype.setTemplate = function(template){
  this.template = template;

  if(this.template && this.content){
    this.render(); 
  };
};

MustacheRenderer.prototype.setContent = function(content){
  this.content = content;

  if(this.template && this.content){
    this.render(); 
  };
};

MustacheRenderer.prototype.render = function(){
  var output = mustache.render(this.template, this.content);  

  if(typeof this.afterRender === "function"){
    this.afterRender(output); 
  } else {
    return output; 
  }
}

module.exports = MustacheRenderer;