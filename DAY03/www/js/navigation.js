(function(global){
  'use strict';

  // ------------------------------------------------------------------
  // Initialization
  var $nav = $('.page-navigation');


  var $depth1 = $nav.children('ul').addClass('depth1');

  var $depth2 = $depth1.find('ul').addClass('depth2');

  var $allLinks = $nav.find('a');

  settingRoleProperties();

  // ------------------------------------------------------------------
  // Handler
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

  function settingRoleProperties() {
    // <div role="navigation">
    if(!$nav.is('nav')) {
      $nav.attr('role', 'navigation');
    }
    $depth1.attr('role', 'menubar');
    $depth2.attr('role', 'menu');
    $allLinks.attr('role', 'menu-item');
  }

  // ------------------------------------------------------------------
  // Event Binding (Event + Handler)
  $nav.on('mouseenter focus', '.depth1 > li > a', navigationActive);
  $nav.on('blur', 'a:last', navigationDeactive);

})(this);