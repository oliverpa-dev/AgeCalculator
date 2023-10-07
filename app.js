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

// String constants - error messages
const emptyErrMsg = "This field is required";
const incorrectDayLogic = "Must be a valid day";
const incorrectMonthLogic = "Must be a valid month";
const incorrectYearLogic = "Must be a valid year";

// Dates variables
let year = new Date().getFullYear();

// When the input is empty
const emptyInputText = (errMsg) => {
  daySpan.innerHTML = `${errMsg}`;
  monthSpan.innerHTML = `${errMsg}`;
  yearSpan.innerHTML = `${errMsg}`;
};

// When the logic is correct;
const checkLogic = (dayV, monthV, yearV) => {
  if (
    dayV <= 31 &&
    monthV <= 12 &&
    yearV <= year &&
    typeof dayV === "number" &&
    typeof monthV === "number" &&
    typeof yearV === "number"
  ) {
    daySpan.innerHTML = "";
    monthSpan.innerHTML = "";
    yearSpan.innerHTML = "";
  } else {
    if (dayV < 0 || dayV > 31) {
      daySpan.innerHTML = "Must be a valid day";
    } else {
      daySpan.innerHTML = "";
    }
    if (monthV < 0 || monthV > 12) {
      monthSpan.innerHTML = "Must be a valid month";
    } else {
      monthSpan.innerHTML = "";
    }
    if (yearV < 0 || dayV > 2023) {
      yearSpan.innerHTML = "Must be a valid year";
    } else {
      yearSpan.innerHTML = "";
    }
  }
};

const inputCheck = (day, month, year, msg) => {
  if (isNaN(day) && isNaN(month) && isNaN(year)) {
    emptyInputText(msg);
  } else {
    checkLogic(day, month, year);
  }
};

calcBtn.addEventListener("click", () => {
  // Input string elements changed into number elements
  let dayVal = parseInt(dayInput.value);
  let monthVal = parseInt(monthInput.value);
  let yearVal = parseInt(yearInput.value);

  inputCheck(dayVal, monthVal, yearVal, emptyErrMsg);
});
