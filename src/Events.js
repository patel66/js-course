var Events = {
  on: function(name, func){
     if(!this.events){
      this.events = {};
      this.events[name] = [func];

     }
     else{
        if(this.events[name] === undefined){
          this.events[name] = [func];
        }else{
          this.events[name].push(func);
        }
     }

  },
  trigger: function(name){
    for(i=0; i < this.events[name].length; i++){
      this.events[name][i]();
    }

  }

};
