
var yourself = {
  sequence: [],
  fibonacci: function (n) {
    let sequence = this.sequence;
    if (n === 0) {
      sequence.push(0);
    }
    if (n === 1) {
      sequence.push(1);
    }
    if (n === 2) {
      sequence.push(2);
    }
    if (n > 2) {
      for (let i = 3; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
    }
    console.log(sequence);
    return sequence.reduce((accu, curr) => accu + curr);
  }
};

console.log(yourself.fibonacci(6));
