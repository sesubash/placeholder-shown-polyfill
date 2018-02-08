(function(){

  function init() {
    document.querySelectorAll('[placeholder]').forEach(el => {
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
