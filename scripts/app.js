'use strict';

var App = (function App() {

  var img, button;

  function init () {
    img = document.querySelector('.container img');
    button = document.getElementById('close');

    button.addEventListener('click', handleClick);
    fetchPrrr();
  }

  function handleClick(evt) {
    window.close();
  }

  // Utility functions
  function fetchPrrr() {
    // Generate a random size
    var width = Math.floor(Math.random() * (200 + 1)) + 240;
    var height = Math.floor(Math.random() * (200 + 1)) + 320;

    var url = 'http://placekitten.com/' + width + '/' + height;
    img.src = url;
    img.onload = function() {
      img.classList.remove('hidden');
    };
  }

  return {
    init: init
  };

})();

window.onload = App.init;
