"use strict";
export function getArea(){
	let radiusValue = document.querySelector(".radius").value;
	let calculateArea =(x) => (Math.PI) * (x*x);
	document.querySelector("#area").innerHTML = (calculateArea(radiusValue)).toFixed(4) + "cm<sup>2</sup>";
}