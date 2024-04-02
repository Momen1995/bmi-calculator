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
  //result.textContent = calcHeightWeight.toFixed(2)

  if(calcHeightWeight < 18.5 && calcHeightWeight > 0){
    result.textContent = `Mr.${names} BMI result: ${calcHeightWeight.toFixed(2)}. It's Underweight😥`;
  }
  else if(calcHeightWeight > 18.5 && calcHeightWeight < 25){
    result.textContent = `Mr.${names} BMI result: ${calcHeightWeight.toFixed(2)}. It's Normal weight🙂`;
  }
  else if (calcHeightWeight > 25 && calcHeightWeight < 30) {
    result.textContent = `Mr.${names} BMI result: ${calcHeightWeight.toFixed(2)}. It's Overweight😕`;
  } 
  else if(calcHeightWeight > 30) {
    result.textContent = `Mr.${names} BMI result: ${calcHeightWeight.toFixed(2)}. It's Obese😥`;
  }
})