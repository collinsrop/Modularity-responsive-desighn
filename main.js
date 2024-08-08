"use strict";
import { getArea } from "./area.js";
import { getCircumfrance } from "./circimfrance.js";
// import { disabled } from './disable.js';

document.addEventListener("DOMContentLoaded", () =>{
	let areaBtn = document.querySelector("#a");
	let cButton = document.querySelector("#p");
	
	areaBtn.addEventListener("click", getArea);
	cButton.addEventListener("click", getCircumfrance);
});