(function(document) {
  'use strict';
  var buddha = {};

  var setAudioContext = function () {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      buddha.context = new AudioContext();
    } catch (e) {
      console.log('No Web Audio API support.');
    }
  };

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    setAudioContext();
    console.log('Based on the Buddha Machine.');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
