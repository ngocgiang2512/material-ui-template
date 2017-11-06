"use strict";

document.addEventListener("DOMContentLoaded", function(event) { 

  // -------------------------------------------------------------
  // Test
  // -------------------------------------------------------------
  console.log('app.js');

  // -------------------------------------------------------------
  // Left Navigation
  // -------------------------------------------------------------
  var navIcon = document.querySelector("#navIcon");
  var overlay = document.querySelector("#overlay");
  var leftNav = document.querySelector("#leftNav");
  var backIcon = document.querySelector(".back");

  navIcon.addEventListener("click", openLeftNav);
  overlay.addEventListener("click", closeLeftNav);
  backIcon.addEventListener("click", closeLeftNav);

});


// -------------------------------------------------------------
// Helper Functions
// -------------------------------------------------------------

function openLeftNav() {
  document.body.addClass('no-scroll');
  overlay.addClass('show');
  leftNav.addClass('show');
}

function closeLeftNav() {
  document.body.removeClass('no-scroll');
  overlay.removeClass('show');
  leftNav.removeClass('show');
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
