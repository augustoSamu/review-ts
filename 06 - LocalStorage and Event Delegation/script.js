const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector("input[name=item]").value;
  this.reset();

  const item = {
    text,
    done: false,
  };
  items.push(item);
  saveLocalStorage();
}

function populatePlates(plates, platesList) {
  if (plates.length === 0) return;

  platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input

  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  saveLocalStorage();
}

function saveLocalStorage() {
  localStorage.setItem("items", JSON.stringify(items));
  populatePlates(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populatePlates(items, itemsList);
