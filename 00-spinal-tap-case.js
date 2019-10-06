/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. 
** spinalCase("This Is Spinal Tap")should return "this-is-spinal-tap"
** spinalCase("thisIsSpinalTap")should return "this-is-spinal-tap"
** spinalCase("The_Andy_Griffith_Show")should return "the-andy-griffith-show"
** spinalCase("Teletubbies say Eh-oh")should return "teletubbies-say-eh-oh"
** spinalCase("AllThe-small Things")should return "all-the-small-things"
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.match(/[A-Z][a-z]+|[a-z]+/g).join("-").toLowerCase();
}

spinalCase('AllThe-small Things');
