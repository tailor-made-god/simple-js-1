let getBalance = document.getElementById("balance");
let getIncome = document.getElementById("income");
let getExpenses = document.getElementById("expenses");

let getDesc = document.getElementById("description");
let getAmount = document.getElementById("amount");
let getChoose = document.getElementById("choose");
let getResult = document.getElementById("result");

let getHistory = document.getElementById("history");

localStorage.setItem("balVal", "18500");
localStorage.setItem("incVal", "30000");
localStorage.setItem("expVal", "11500");

let balVal = Number(localStorage.getItem("balVal"));
let incVal = Number(localStorage.getItem("incVal"));
let expVal = Number(localStorage.getItem("expVal"));

const entries = [{ yes: "no" }];

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

  const clone = template.content.cloneNode(true);

  clone.querySelector(".t-setname").textContent = gotDesc;
  clone.querySelector(".t-choosen").textContent = gotChoose;
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
