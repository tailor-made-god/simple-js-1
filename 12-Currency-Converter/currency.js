let getDisplay = document.getElementById("display");
let getfrom = document.getElementById("from");
let getTo = document.getElementById("to");
let getsubmit = document.getElementById("submit");
let getNumber = document.getElementById("number");
let myform = document.getElementById("myform");

const apiKey = "9b8fb611ba16c087d7844b47";

function syncDropdowns(changedSelect, targetSelect) {
  const selectedValue = changedSelect.value;
  for (const option of targetSelect.options) {
    option.disabled = option.value !== "" && option.value === selectedValue;
  }
}

getfrom.addEventListener("change", () => {
  syncDropdowns(getfrom, getTo);
});

getTo.addEventListener("change", () => {
  syncDropdowns(getTo, getfrom);
});

async function calc(event) {
  event.preventDefault();
  const gotfrom = getfrom.value;
  const gotTo = getTo.value;
  const gotNumber = Number(getNumber.value);

  if (!gotfrom || !gotTo || gotNumber <= 0) {
    getDisplay.textContent = "Enter valid amount";
    return;
  }

  getDisplay.textContent = "Converting...";
  getsubmit.disabled = true;

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${gotfrom}/${gotTo}/${gotNumber}`,
    );

    if (!response.ok) {
      throw new Error("Conversion request failed");
    }
    const data = await response.json();
    if (data.result !== "success") {
      throw new Error("API error");
    }
    const result = Number(data.conversion_result).toFixed(2);

    getDisplay.textContent = `${result} ${gotTo}`;
  } catch (error) {
    getDisplay.textContent = "Error fetching rate";
  } finally {
    getsubmit.disabled = false;
  }
}

myform.addEventListener("submit", calc);
