/* 
 * Given @@n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each @@name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for @@name is not found, print Not found instead.
 *
 *Note: Your phone book should be a Dictionary/Map/HashMap data structure.
 */

class PhoneBook {
  constructor () {
    this.book = [];
  }

  getNumber(name) {
    if (this.book[name] > 0) {
      console.log(name + '=' + this.book[name]);
    } else {
      console.log('Not found');
    }
  }

  setNumber(name, phoneNumber) {
    this.book[name] = phoneNumber;
    }
  }


let phonebook = new PhoneBook();

function processData(input) {
  //If input contains whitespace call setNumber, else call getNumber
  let dataset = input.split(' ');
  if (dataset[1] > 0) {
    phonebook.setNumber(dataset[0], dataset[1]);
  } else {
    phonebook.getNumber(dataset[0]);
  }
} 

processData('sam 99912222');
processData('harry 12299933');
processData('tom 11122222');
processData('sam');
processData('edward');
processData('harry');