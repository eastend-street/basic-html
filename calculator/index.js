let result = document.getElementById("result");

function enterValue(element) {
  result.value += element;
}

function calculate() {
  result.value = eval(result.value);
  console.log(result.value);
  // result.value = new Function("return " + result.value)();
}

function clearResult() {
  result.value = 0;
}
