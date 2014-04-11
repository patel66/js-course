(function () {

  var QueryWrapper = function (elems) {
    // TODO
    this.get = function(index){
      return elems[index];
    };
    // debugger;
    this.each = function (func){
      for(i=0; i < elems.length; i++){
        func(elems[i], i);
      }
    };

    this.length = elems.length;

    this.show = function(){
        this.each(function(elem){
          elem.style.display = '';
        })
       return this;
    };

    this.hide = function(){
      this.each(function(elem){
        elem.style.display = "none";

       })
      return this;
    };

    this.addClass = function(name){
      this.each(function(elem){
        // debugger;
        elem.className = name;
      })
      return this;
    }

    this.css = function(prop, change){

      if(typeof(prop) === 'object'){
        for (var p in prop) {
          this.each(function(elem){
            elem.style[p] = prop[p];
          })
        };
      }
      else{
        this.each(function(elem){
          // debugger;
          elem.style[prop] = change;
        })
      }
      return this;
    };

    return this;
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
      elementsArr = document.getElementsByTagName(selector);
    }
    // debugger;

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
