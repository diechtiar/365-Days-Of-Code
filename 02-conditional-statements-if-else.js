/* Complete the getGrade(score) function. Return grade according to the following rules:
** if 25 < score <= 30 then grade = A
** if 20 < score <= 25 then grade = B
** if 15 < score <= 20 then grade = C
** if 10 < score <= 15 then grade = D
** if 5 < score <= 10 then grade = E
** if 0 <= score <= 5 then grade = F
** Constraints: 0 <= score <= 30
*/



console.log(getGrade(11));function getGrade(score) {
  let grade;
  // Write your code here
  
  if (25 < score && score <= 30) grade = 'A';
  if (20 < score && score <= 25) grade = 'B';
  if (15 < score && score <= 20) grade = 'C';
  if (10 < score && score <= 15) grade = 'D';
  if (5 < score && score <= 10) grade = 'E';
  if (0 <= score && score <= 5) grade = 'F';

  return grade;
}