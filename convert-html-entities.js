/*
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *
 */

function convertHTML(str) {
  // &colon;&rpar;
  let htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };

  for (let [char, entity] of Object.entries(htmlEntities)) {
    let regex = new RegExp(char, 'gi');
    str = str.replace(regex, entity);
  }
  
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("<>"));
