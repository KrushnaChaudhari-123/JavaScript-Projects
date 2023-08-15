const calculate = () => {
  const number = document.getElementById("number").value;
  const select = document.getElementById("list");
  const valueselected = list.options[select.selectedIndex].value;
  const result = document.getElementById("result");

  const celTofeh = (num) => {
    return Math.round((9 / 5) * num + 32);
  };
  const fehTocel = (num) => {
    return Math.round(((num - 32) * 5) / 9);
  };
  if (valueselected === "Cel") {
    let res = celTofeh(number);
    result.innerHTML = res + " Fahrenheit";
  } else {
    let res = fehTocel(number);
    result.innerHTML = res + " Celsius";
  }
};
