const getBalance = document.getElementById("balance");
const getIncome = document.getElementById("income");
const getExpenses = document.getElementById("expenses");

const form = document.querySelector("form");
const getDesc = document.getElementById("description");
const getAmount = document.getElementById("amount");
const getChoose = document.getElementById("choose");

const getHistory = document.getElementById("history");
const template = document.getElementById("template");

let entries = JSON.parse(localStorage.getItem("expenseEntries")) || [];

function saveAndRender() {
  localStorage.setItem("expenseEntries", JSON.stringify(entries));

  let incVal = 0;
  let expVal = 0;

  getHistory.querySelectorAll(".t-sets").forEach((el) => {
    el.remove();
  });

  entries.forEach((entry) => {
    const isIncome = entry.type === "income";
    if (isIncome) {
      incVal += entry.amount;
    } else {
      expVal += entry.amount;
    }

    const clone = template.content.cloneNode(true);
    const amountEl = clone.querySelector(".t-show-number");
    clone.querySelector(".t-setname").textContent = entry.desc;
    clone.querySelector(".t-choosen").textContent = entry.type;
    amountEl.textContent = `${isIncome ? "+" : "-"} ₹ ${entry.amount.toLocaleString("en-IN")}`;
    amountEl.classList.add(isIncome ? "green" : "red");

    clone.querySelector(".delete").addEventListener("click", () => {
      entries = entries.filter((item) => item.id !== entry.id);
      saveAndRender();
    });

    getHistory.prepend(clone);
  });

  const balVal = incVal - expVal;
  getIncome.textContent = `₹ ${incVal.toLocaleString("en-IN")}`;
  getExpenses.textContent = `₹ ${expVal.toLocaleString("en-IN")}`;
  getBalance.textContent = `₹ ${balVal.toLocaleString("en-IN")}`;
}

function calculate(event) {
  event.preventDefault();
  const gotChoose = getChoose.value;
  const gotAmount = Number(getAmount.value);
  const gotDesc = getDesc.value.trim();

  if (!gotDesc || gotAmount <= 0) {
    return;
  }

  entries.push({
    id: Date.now(),
    desc: gotDesc,
    amount: gotAmount,
    type: gotChoose,
  });

  form.reset();
  saveAndRender();
}

form.addEventListener("submit", calculate);
saveAndRender();
