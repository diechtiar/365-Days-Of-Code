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
      return (name + '=' + this.book[name]);
    } else {
      return 'Not found';
    }
  }

  setNumber(nameAndNumber) {
    let name, phoneNumber;
    [name, phoneNumber] = nameAndNumber.split(' ');
    
    this.book[name] = phoneNumber;
//    console.log(`Number set: ${name}=${this.book[name]}`);
    return `${name}=${this.book[name]}`;
    }
  }


let phonebook = new PhoneBook();

function processData(input) {
  //If input contains whitespace call setNumber, else call getNumber
  if (input.indexOf(' ') > 0) {
    phonebook.setNumber(input);
  } else {
    console.log(phonebook.getNumber(input));
  }
} 

processData('Joe 4589969364234');
processData('Joe');
processData('John');