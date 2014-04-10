(function () {

  var QueryWrapper = function (elems) {
    // TODO
    this.get = function(index){
      return elems[index];
    }
    // debugger;
    this.each = function (func){
      for(i=0; i < elems.length; i++){
        func(elems[i], i);
      }
    }
  };

  var myQuery = function (selector) {
    // TODO
    var elementsArr;
    if(selector[0] === '#'){

      elementsArr = [document.getElementById(selector.slice(1))];
    }
    else if(selector[0] === '.'){

      var element = document.getElementsByClassName(selector.slice(1));
      elementsArr = element;
    }
    else{
      elementsArr = document.getElementsByTagNames(selector);
    }

    // debugger;
    return new QueryWrapper(elementsArr);
  };

  window.$ = myQuery;

  $.version = 'beta';

  $.each = function (array, func) {
      for(i=0; i < array.length; i++){
        func(array[i]);
      }
      return func;
  };




})();
