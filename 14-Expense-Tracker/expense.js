const getBalance = document.getElementById("balance");
const getIncome = document.getElementById("income");
const getExpenses = document.getElementById("expenses");

const form = document.querySelector("form");
const getDesc = document.getElementById("description");
const getAmount = document.getElementById("amount");
const getChoose = document.getElementById("choose");

const getHistory = document.getElementById("history");
const template = document.getElementById("template");

let entries = JSON.parse(localStorage.getItem("expenceEntries")) || [];

function saveAndRender() {
  localStorage.setItem("expenceEntries", JSON.stringify(entries));

  let incVal = 0;
  let expVal = 0;

  getHistory.querySelectorAll(".t-sets").forEach((el) => {
    e.remove();
  });

  entries.forEach((entry) => {
    const isIncome = entry.type === "income";
    if (isIncome) {
      incVal += entry.getAmount;
    } else {
      expVal += entry.getAmount;
    }

    const clone = template.content.cloneNode(true);
    const amountEl = clone.querySelector(".t-show-number");
    clone.querySelector(".t-setname").textContent = gotDesc;
    clone.querySelector(".t-choosen").textContent = gotChoose;
    amountEl.textContent = `${isIncome ? "+" : "-"} ₹ ${entry.amount.toLocalString("en-IN")}`;
    amountEl.classList.add(isIncome ? "green" : "red");
  });
}

function calculate(event) {
  event.preventDefault();
  let gotChoose = getChoose.value;
  let gotAmount = Number(getAmount.value);
  let gotDesc = getDesc.value;
  let color = "";
  let symbol = "";
  let newEntry = {};
  let decide = false;
  if (gotChoose === "income") {
    color = "green";
    symbol = "+";
    decide = true;
    incVal = incVal + gotAmount;
    balVal = balVal + gotAmount;
    localStorage.setItem("incVal", incVal);
    localStorage.setItem("balVal", balVal);
    getIncome.innerHTML = "₹ " + incVal;
    getBalance.innerHTML = "₹ " + balVal;

    newEntry = { [gotDesc]: gotAmount };
    entries.push(newEntry);

    console.log(localStorage.getItem("balVal"));
  } else {
    color = "red";
    symbol = "-";
    expVal = expVal + gotAmount;
    balVal = balVal - gotAmount;
    localStorage.setItem("expVal", expVal);
    localStorage.setItem("balVal", balVal);
    getExpenses.innerHTML = "₹ " + expVal;
    getBalance.innerHTML = "₹ " + balVal;

    newEntry = { [gotDesc]: gotAmount };
    entries.push(newEntry);
  }

  clone.querySelector(".t-show-number").textContent =
    symbol + " ₹ " + gotAmount;
  clone.querySelector(".t-show-number").classList.add(color);

  clone.querySelector(".t-wrap .delete").addEventListener("click", (e) => {
    const parent = e.target.closest(".t-sets");

    const item = entries.indexOf(newEntry);
    const values = Object.values(newEntry);
    if (decide) {
      incVal = incVal - Number(values);
      balVal = balVal - Number(values);
      localStorage.setItem("incVal", incVal);
      localStorage.setItem("balVal", balVal);
      getIncome.innerHTML = "₹ " + incVal;
      getBalance.innerHTML = "₹ " + balVal;
    } else {
      expVal = expVal + Number(values);
      balVal = balVal + Number(values);
      localStorage.setItem("expVal", expVal);
      localStorage.setItem("balVal", balVal);
      getExpenses.innerHTML = "₹ " + expVal;
      getBalance.innerHTML = "₹ " + balVal;
    }
    entries.splice(item, 1);

    parent.remove();

    console.table(entries);
  });

  getHistory.prepend(clone);
}

getResult.addEventListener("click", calculate);

console.table(entries);
