(function () {

  var QueryWrapper = function (elems) {
    // TODO
  };

  var myQuery = function (selector) {
    // TODO

  };

  window.$ = myQuery;

  $.version = 'beta';

  $.each = function (array, func) {
      for(i=0; i < array.length; i++){
        func(array[i]);
      }
      return func;
  }





})();
