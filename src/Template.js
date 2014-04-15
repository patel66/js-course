var render = function(temp, obj){

  for(var prop in obj){
    temp = temp.replace(new RegExp("{{" +prop+ "}}", "g"), obj[prop]  );
    }

  return temp;

};

