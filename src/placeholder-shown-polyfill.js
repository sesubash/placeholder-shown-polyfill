//==================================================
// Polyfill for pseudo selector :placeholder-shown
// Author: Subash Selvaraj(github userid:sesubash)
//==================================================
(function(){

  function init() {
    document.querySelectorAll('[placeholder]').forEach(function(el) {
      if(el.getAttribute('placeholder') != "")
        placeholderPolyfill.call(el);

      el.addEventListener('change', placeholderPolyfill);
      el.addEventListener('keyup', placeholderPolyfill);
    });
  }

  function placeholderPolyfill() {
    this.classList[this.value ? 'remove' : 'add']('placeholder-shown');
  }

  if (/^[c|i]|d$/.test(document.readyState || "")) {
  	init();
  } else {
  	document.addEventListener("DOMContentLoaded", init);
  }

})();
