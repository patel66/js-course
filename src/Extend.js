var extend = function(dest, source) {
  for(var prop in source){
    dest[prop] = source[prop];
  };

  return dest;
};
