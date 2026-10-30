let getList = document.getElementById("list");
let getItem = document.getElementById("item");
let getAdd = document.getElementById("add");

getAdd.addEventListener("click", () => {
  getList.insertAdjacentHTML(
    "beforeend",
    "<li><input type='checkbox'>" + getItem.value.trim() + "</li>",
  );
  getItem.value = "";
});

// Enter Key Function

getItem.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    getAdd.click();
  }
});

// Checkbox CrossOut

getList.addEventListener("change", (e) => {
  if (e.target.checked) {
    e.target.parentElement.style.textDecoration = "line-through";
  } else {
    e.target.parentElement.style.textDecoration = "none";
  }
});
