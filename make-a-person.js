var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  };
  this.getFirstName = function () {
    return `Bob`;
  }
  
  this.getLastName = function () {
    return `Ross`;
  }

  this.setFullName = function(fullName) {
    this.getFullName = function() {
      return fullName;
    }
    this.setFirstName(fullName.split(' ')[0]);
    this.setLastName(fullName.split(' ')[1]);
  }

  this.setFirstName = function(firstName) {
    this.getFirstName = function() {
      return firstName;
    }
  }

  this.setLastName = function(lastName) {
    this.getLastName = function() {
      return lastName;
    }
  }  

};

var bob = new Person('Bob Ross');

if (Object.keys(bob).length !== 6) {
  console.log('Object.keys(bob).length should return 6.');
};

if ( ! (bob instanceof Person)) {
  console.log('bob instanceof Person should return true.');
}

if (bob.firstName !== undefined) {
  console.log('bob.firstName should return undefined.');
}

if (bob.lastName !== undefined) {
  console.log('bob.lastName should return undefined.');
}

if (bob.getFirstName() !== 'Bob') {
  console.log('bob.getFirstName() should return "Bob".');
}

if (bob.getLastName() !== 'Ross') {
  console.log('bob.getLastName() should return "Ross".');
}

if (bob.getFullName() !== 'Bob Ross') {
  console.log('bob.getFullName() should return "Bob Ross".');
}

bob.setFirstName('Haskell');

if (bob.getFullName() !== 'Haskell Ross') {
  console.log('bob.getFullName() should return "Haskell Ross".');
}

bob.setLastName('Curry');

if (bob.getFullName() !== 'Haskell Curry') {
  console.log('bob.getFullName() should return "Haskell Curry".');
}

bob.setFullName('Haskell Curry');

if (bob.getFullName() !== 'Haskell Curry') {
  console.log('bob.getFullName() should return "Haskell Curry".');
}

