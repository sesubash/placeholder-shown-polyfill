//==================================================
// Polyfill for pseudo selector :placeholder-shown
// Author: Subash Selvaraj(github userid:sesubash)
//==================================================
(function(){

  var placeholderShownPolyfill = {
    init: function() {
      var self = this;
      document.querySelectorAll('[placeholder]').forEach(function(el) {
        if(el.getAttribute('placeholder') != "")
          self.updatePlaceholder.call(el);

        el.addEventListener('change', self.updatePlaceholder);
        el.addEventListener('keyup', self.updatePlaceholder);
      });
    },

    updatePlaceholder: function() {
      this.classList[this.value ? 'remove' : 'add']('placeholder-shown');
    }

  };

  if (/^[c|i]|d$/.test(document.readyState || "")) {
    placeholderShownPolyfill.init();
  } else {
    document.addEventListener("DOMContentLoaded", placeholderShownPolyfill.init());
  }

  window.placeholderShownPolyfill = placeholderShownPolyfill;

})();
