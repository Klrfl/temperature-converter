const inputTempSelect = document.getElementById("inputTempSelect");
const tempInput = document.getElementById("tempInput");
const targetTempSelect = document.getElementById("targetTempSelect");

const submitBtn = document.getElementById("submit");
const resultP = document.querySelector("p.result");

let initialTemp = inputTempSelect.value;
let initialTempValue = tempInput.value;
let targetTemp = targetTempSelect.value;

inputTempSelect.addEventListener("input", () => {
  initialTemp = inputTempSelect.value;
});

tempInput.addEventListener("input", (e) => {
  e.preventDefault();
  initialTempValue = tempInput.value;
  displayResults();
});

targetTempSelect.addEventListener("input", (e) => {
  e.preventDefault();
  targetTemp = targetTempSelect.value;
  displayResults();
});

// add new formulas here
const convertTable = {
  F: {
    F: () => initialTempValue,
    C: () => ((initialTempValue - 32) * 5) / 9,
  },
  C: {
    C: () => initialTempValue,
    F: () => (initialTempValue * 9) / 5 + 32,
  },
};

function convert() {
  for (const key in convertTable) {
    if (key === initialTemp) {
      // search inside the key for convert function
      for (const subKey in convertTable[key]) {
        if (subKey == targetTemp) {
          return convertTable[key][subKey]();
        }
      }
    }
  }
}

function displayResults() {
  resultP.innerText = Math.round(convert(), 2);
}
