;(function($, Modernizr) {
  'use strict';

  /**
   * Autofocus input element on page load
   */
  if (!Modernizr.input.autofocus) {
    // get the form and its input elements
    var form = document.forms[0],
      inputs = form.elements;

    // if no autofocus, put the focus in the first field
    inputs[0].focus();
  }

  /**
   * Input placeholder polyfill
   */
  if(!Modernizr.input.placeholder){
    var input;
    $('[placeholder]').focus(function() {
      input = $(this);
      if (input.val() === input.attr('placeholder')) {
        input.val('').removeClass('placeholder');
      }
    }).blur(function() {
      input = $(this);
      if (input.val() === '' || input.val() === input.attr('placeholder')) {
        input.val(input.attr('placeholder')).addClass('placeholder');
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        input = $(this);
        if (input.val() === input.attr('placeholder')) {
          return false;
        }
      });
    });
  }

})(window.jQuery, window.Modernizr);
