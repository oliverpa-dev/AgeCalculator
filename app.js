"use strict";

// Input elements
const dayInput = document.getElementById("input-day");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");

// Button
const calcBtn = document.getElementById("btn-calc");

// Output elements
let dayOutput = document.getElementById("output-days");
let monthOutput = document.getElementById("output-month");
let yearOutput = document.getElementById("output-years");

// Check first if it is not empty
// Then check if the value is a type of number
// Then console log it

const inputCheck = (dayVal, monthVal, yearVal) => {
  if (dayVal.value !== "" && monthVal.value !== "" && yearVal.value !== "") {
    let day = parseInt(dayVal.value);
    let month = parseInt(monthVal.value);
    let year = parseInt(yearVal.value);
    return { day, month, year };
  } else {
    console.log("It is empty");
  }
};

calcBtn.addEventListener("click", () => {
  let test = inputCheck(dayInput, monthInput, yearInput);
  let year = new Date();
  let day = new Date();
  let month = new Date();
  if (test.day <= 31 && test.month <= 12 && test.year <= year.getFullYear()) {
    dayOutput.innerHTML = test.day - day.getDay();
    if (test.month > month.getMonth()) {
      monthOutput.innerHTML = test.month - month.getMonth();
      yearOutput.innerHTML = year.getFullYear() - 1 - test.year;
    } else {
      yearOutput.innerHTML = year.getFullYear() - test.year;
      monthOutput.innerHTML = month.getMonth() - test.month;
    }
  }
});

let test = new Date();
let test2 = new Date();

console.log(test2.getDay());
console.log(test.getMonth());
