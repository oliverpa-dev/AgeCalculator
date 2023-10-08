"use strict";

// Inputs element reference
const dayInput = document.getElementById("input-day");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");

// Labels element reference
const dayLabels = document.querySelectorAll("[id='error']"); // Needs only the styling
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
let day = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();
console.log(day, month - 3, year);

// When the input is empty
const emptyInputText = (errMsg) => {
  daySpan.innerHTML = `${errMsg}`;
  monthSpan.innerHTML = `${errMsg}`;
  yearSpan.innerHTML = `${errMsg}`;
  dayLabels.forEach((element) => {
    element.classList.add("error");
  });
};

// For tomorrow, fix the issue with calculations
const calcAge = (dayV, monthV, yearV) => {
  if (dayV <= day) {
    dayOutput.innerHTML = day - dayV;
  } else {
    dayOutput.innerHTML = dayV - day;
  }
  if (monthV <= month) {
    monthOutput.innerHTML = month - monthV;
  } else {
    monthOutput.innerHTML = monthV - month;
  }
  yearOutput.innerHTML = year - yearV;
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
    dayLabels.forEach((element) => {
      element.classList.remove("error");
    });
    calcAge(dayV, monthV, yearV);
  } else {
    if (dayV < 0 || dayV > 31) {
      daySpan.innerHTML = "Must be a valid day";
      dayLabels[0].classList.add("error");
    } else {
      daySpan.innerHTML = "";
      dayLabels[0].classList.remove("error");
    }
    if (monthV < 0 || monthV > 12) {
      monthSpan.innerHTML = "Must be a valid month";
      dayLabels[1].classList.add("error");
    } else {
      monthSpan.innerHTML = "";
      dayLabels[1].classList.remove("error");
    }
    if (yearV < 0 || dayV > 2023) {
      yearSpan.innerHTML = "Must be a valid year";
      dayLabels[2].classList.add("error");
    } else {
      yearSpan.innerHTML = "";
      dayLabels[2].classList.remove("error");
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
