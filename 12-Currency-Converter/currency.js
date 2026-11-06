let getDisplay = document.getElementById("display");
let getfrom = document.getElementById("from");
let getTo = document.getElementById("to");
let getsubmit = document.getElementById("submit");
let getNumber = document.getElementById("number");

const apiKey = "9b8fb611ba16c087d7844b47";

async function calc(event) {
  event.preventDefault();
  const gotfrom = getfrom.value;
  const gotTo = getTo.value;
  const gotNumber = Number(getNumber.value);

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/9b8fb611ba16c087d7844b47/pair/${gotfrom}/${gotTo}/${gotNumber}`,
  );

  const data = await response.json();

  const result = Number(data.conversion_result).toFixed(2);
  getDisplay.textContent = result + " " + gotTo;
}

// MAKE DISABLE EQUAL VALUES
// getfrom.addEventListener("change",()=>{
//   if(getfrom.value )
// })

getsubmit.addEventListener("click", calc);
