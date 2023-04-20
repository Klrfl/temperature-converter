const inputTempSelect = document.getElementById("inputTempSelect");
const tempInput = document.getElementById("tempInput");
const targetTempSelect = document.getElementById("targetTempSelect");

const submitBtn = document.getElementById("submit");
const resultP = document.querySelector("p.result");

let initialTemp = inputTempSelect.value;
let initialTempValue = tempInput.value;
let targetTemp = targetTempSelect.value;

inputTempSelect.addEventListener("change", () => {
  initialTemp = inputTempSelect.value;
});

tempInput.addEventListener("change", () => {
  initialTempValue = tempInput.value;
});

targetTempSelect.addEventListener("change", () => {
  targetTemp = targetTempSelect.value;
});

// add new formulas here
const convertTable = {
  F: {
    C: () => ((initialTempValue - 32) * 5) / 9,
  },
  C: {
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
  resultP.innerText = convert();
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(initialTemp, initialTempValue, targetTemp);
  displayResults();
});
