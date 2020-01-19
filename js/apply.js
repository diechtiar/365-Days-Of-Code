var runFunc = function (a){
  this.x = a;
  return this.x;
};
var a ={
  x:1,
  run:runFunc
}
result = a.run (2);

var b = {x:1};

