var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  let first = firstAndLast.split(' ')[0];
  let last = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return `${first} ${last}`;
  };
  this.getFirstName = function () {
    return first;
  };
  this.getLastName = function () {
    return last;
  };
  this.setFullName = function (fl) {
    this.first = fl.split(' ')[0];
    this.last = fl.split(' ')[1];
  };
  this.setFirstName = function (f) {
    first = f;
  };

  this.setLastName = function (l) {
    last = l;
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

bob.setFirstName('Haskell');
console.log(bob.getFullName());
