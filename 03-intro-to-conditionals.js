/* Given an integer N, perform the following actions:
** - if N is odd, print "Weird"
** - if N is even and in the inclusive range of 2 to 5, print "Not Weird"
** - if N is even and in the inclusive range of 6 to 20, print "Weird"
** - if N is even and greater than 20, print "Not Weird"
*/

function main(inte) {
    const N = inte;
    let isEven = N % 2 ? false : true;
    
    if (isEven) {
if (((2 <= N) && (N <= 5)) || (N > 20)) console.log(`Not Weird`);
      if ((6 <= N) && (N <= 20)) console.log(`Weird`);
    } else {
      console.log(`Weird`);
    }

}


