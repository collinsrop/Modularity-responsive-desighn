"use strict";
export function getCircumfrance() {
  let radius = document.querySelector(".radius").value;
  let calculate = (x) => {
    return Math.PI * (x + x);
  };
  document.querySelector("#circumfrance").innerHTML=(calculate(radius)).toFixed(4) + "cm";
}
