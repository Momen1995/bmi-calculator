"use strict"

const inputName = document.querySelector(".input-name");
const inputHeight = document.querySelector(".input-height");
const inputWeight = document.querySelector(".input-weight");
const button = document.querySelector(".btn");
const result = document.querySelector(".result-one");

button.addEventListener("click",function(){
  const names = inputName.value;
  const height = Number(inputHeight.value);
  const weight = Number(inputWeight.value)

  const calcHeightWeight = weight / (height * height);
  result.textContent = calcHeightWeight.toFixed(2)
})