(function(global){
  'use strict';

  var $nav = $('.page-navigation');

  $nav.on('mouseenter focus', '.depth1 > li > a', navigationActive);
  $nav.on('blur', '.depth1 > li:last a', navigationDeactive);

  function navigationActive(e) {
    allDeactive();
    $(this).parent().addClass('active');
  }

  function navigationDeactive(e) {
    allDeactive();
  }

  function allDeactive() {
    $nav.find('.depth1 > li').removeClass('active');
  }

})(this);