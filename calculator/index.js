let result = document.getElementById("result");

function enterValue(element) {
  result.value += element;
}

function calculate() {
  result.value = eval(result.value);
}

function clearResult() {
  result.value = "";
}
