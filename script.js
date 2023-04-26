function generateFibonacciSequence(n) {
  if (n < 0) {
    throw new Error("Число должно быть положительным!");
  }
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

function generateSequence() {
  let num = document.getElementById("num").value;
  if (num < 0) {
    document.getElementById("sequence").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    alert("Число должно быть положительным!");
    return;
  }
  let sequence = generateFibonacciSequence(parseInt(num));
  document.getElementById("sequence").innerHTML = sequence.join(", ");
  
  let index = document.getElementById("index").value;
  if (index !== "") {
      let result = sequence[parseInt(index)];
      document.getElementById("result").innerHTML = result;
  }
}


