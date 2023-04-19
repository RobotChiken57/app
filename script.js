function generateFibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  }
  
  function generateSequence() {
    let num = document.getElementById("num").value;
    let sequence = generateFibonacciSequence(num);
    document.getElementById("sequence").innerHTML = sequence.join(", ");
}
