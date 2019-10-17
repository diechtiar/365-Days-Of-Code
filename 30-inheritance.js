class Person {
  constructor(firstName, lastName, identification) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.idNumber = identification;
  }
  
  printPerson() {
      console.log(
          "Name: " + this.lastName + ", " + this.firstName 
          + "\nID: " + this.idNumber
      )
  }
}

class Student extends Person {
  /*	
  *   Class Constructor
  *   
  *   @param firstName - A string denoting the Person's first name.
  *   @param lastName - A string denoting the Person's last name.
  *   @param id - An integer denoting the Person's ID number.
  *   @param scores - An array of integers denoting the Person's test scores.
  */
  // Write your constructor here
  constructor (firstName, lastName, id, scores) {
    super()
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.scores = scores
  }
  /*	
  *   Method Name: calculate
  *   @return A character denoting the grade.
  */
  // Write your method here
  calculate() {
  /*
  * (90 <= a) && (a <= 100) => 'O'
  * (80 <= a) && (a <= 90) => 'E'
  * (70 <= a) && (a <= 80) => 'A'
  * (55 <= a) && (a <= 70) => 'P'
  * (40 <= a) && (a <= 55) => 'D'
  * (a < 40) => 'T'
  
    return grade
  }
}

function main() {
  let firstName = read()
  let lastName = read()
  let id = +read()
  let numScores = +read()
  let testScores = new Array(numScores)
  
  for (var i = 0; i < numScores; i++) {
      testScores[i] = +read()  
  }

  let s = new Student(firstName, lastName, id, testScores)
  s.printPerson()
  s.calculate()
  console.log('Grade: ' + s.calculate())
}