"use strict";

// Inputs element reference
const dayInput = document.getElementById("input-day");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");

// Labels element reference
const dayLabels = document.getElementById("error"); // Needs only the styling
const daySpan = document.getElementById("error-day"); // Needs a basic dom manipulation
const monthSpan = document.getElementById("error-month"); // Needs a basic dom manipulation
const yearSpan = document.getElementById("error-year"); // Needs a basic dom manipulation

// Buttons element reference
const calcBtn = document.getElementById("btn-calc");

// Outputs element reference
let dayOutput = document.getElementById("output-days");
let monthOutput = document.getElementById("output-month");
let yearOutput = document.getElementById("output-years");

let test = inputCheck(dayInput, monthInput, yearInput, emptyErrMsg);

// String constants - error messages
const emptyErrMsg = "This field is required";
const incorrectDayLogic = "Must be a valid day";
const incorrectMonthLogic = "Must be a valid month";
const incorrectYearLogic = "Must be a valid year";

// Dates variables
let day = new Date().getDay();
let month = new Date().getMonth();
let year = new Date().getFullYear();

// Input string elements changed into number elements
let dayNumber = parseInt(dayInput.value);
let monthNumber = parseInt(monthInput.value);
let yearNumber = parseInt(yearInput.value);

const inputCheck = (dayVal, monthVal, yearVal) => {
  if (dayVal.value !== "" && monthVal.value !== "" && yearVal.value !== "") {
    return { day, month, year };
  } else {
    // If it's empty
    // Display error states
    emptyInputText(emptyErrMsg);
  }
};

// When the input is empty
const emptyInputText = (emptyErrMsg) => {
  daySpan.innerHTML = `${emptyErrMsg}`;
  monthSpan.innerHTML = `${emptyErrMsg}`;
  yearSpan.innerHTML = `${emptyErrMsg}`;
};

// When the input is not empty but is not logical
const logicInputText = (logicDay, logicMonth, logicYear) => {
  if()
}

calcBtn.addEventListener("click", () => {
  inputCheck(dayInput, monthInput, yearInput);
  // let year = new Date();
  // let day = new Date();
  // let month = new Date();
  // if (test.day <= 31 && test.month <= 12 && test.year <= year.getFullYear()) {
  //   dayOutput.innerHTML = test.day - day.getDay();
  //   if (test.month > month.getMonth()) {
  //     monthOutput.innerHTML = test.month - month.getMonth();
  //     yearOutput.innerHTML = year.getFullYear() - 1 - test.year;
  //   } else {
  //     yearOutput.innerHTML = year.getFullYear() - test.year;
  //     monthOutput.innerHTML = month.getMonth() - test.month;
  //   }
  // }
});
