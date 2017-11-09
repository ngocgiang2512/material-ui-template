"use strict";

document.addEventListener("DOMContentLoaded", function(event) { 

  // -------------------------------------------------------------
  // Test
  // -------------------------------------------------------------
  console.log('app.js');

  // -------------------------------------------------------------
  // Left Navigation
  // -------------------------------------------------------------
  var body = document.body;
  var navIcon = document.querySelector("#navIcon");
  var overlay = document.querySelector("#overlay");
  var backIcon = document.querySelector(".back");
  var content = document.querySelector("#content");

  navIcon.addEventListener('click', function() {
    body.hasClass('showNav') ? closeLeftNav() : openLeftNav();
  })
  
  backIcon.addEventListener("click", closeLeftNav);
  content.addEventListener("click", closeLeftNav);
  overlay.addEventListener("click", closeLeftNav);

});


// -------------------------------------------------------------
// Helper Functions
// -------------------------------------------------------------

function openLeftNav() {
  document.body.addClass('showNav');
}

function closeLeftNav() {
  document.body.removeClass('showNav');
}

Element.prototype.hasClass = function(cls) {
  return !!this.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

Element.prototype.addClass = function(cls) {
  if (!this.hasClass(cls)) {
    this.className = this.className.trim() + " " + cls;
  }
}

Element.prototype.removeClass = function(cls) {
  if (this.hasClass(cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    this.className = this.className.replace(reg,' ').trim();
  }
}
