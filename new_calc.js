function add_num(char) {
  document.getElementById('result').value += char;
}

function delete_num() {
  let result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function clear_num() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  let result = document.getElementById('result').value;
  let calculatedResult = eval(result);
  document.getElementById('result').value = calculatedResult;
}

function SquareRoot_num() {
  let result = document.getElementById('result').value;
  let squareRoot = Math.sqrt(eval(result));
  document.getElementById('result').value = squareRoot;
}

