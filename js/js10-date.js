// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
// Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday  
  let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // Write your code here
  let date = new Date(dateString);
  dayName = days[date.getDay()];
  return dayName;
}

console.log(getDayName('10/11/2009')); // -> Sunday
console.log(getDayName('11/10/2010')); // -> Wednesday