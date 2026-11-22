let getList = document.getElementById("list");
let getItem = document.getElementById("item");
let getMyForm = document.getElementById("myform");

getMyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = getItem.value.trim();
  if (!text) {
    return;
  }

  const li = document.createElement("li");
  const row = document.createElement("div");
  row.className = "todo-row";

  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  label.append(checkbox, " ", text);
  row.append(label, deleteBtn);
  li.append(row);
  getList.appendChild(li);

  getItem.value = "";
  getItem.focus();
});

// Checkbox CrossOut

getList.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    e.target.closest("li").classList.toggle("completed", e.target.checked);
  }
});

// Delete Function
getList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove();
  }
});
