(function(global){
  'use strict';
  var guide = document.querySelector('.guide-overlay');
  document.addEventListener('keydown', function(e) {
    if ( e.keyCode === 71 && e.shiftKey ) {
      guide.classList.toggle('show');
    }
  })
})(this);