geotab.addin.helloWorld = (function () {
  'use strict';

  return {
    initialize: function(api, state, callback) {
      callback();
    },
    focus: function(api, state) {
      document.getElementById("helloMessage").textContent = "👋 Hello, world from Geotab Add-In!";
    },
    blur: function(api, state) {}
  };
})();
