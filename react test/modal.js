const newBtn = document.getElementById("newBtn");
const closeBtn = document.getElementById("closeBtn");
const container = document.getElementById("container");
const cards = document.querySelectorAll(".cards .card-container");
const todo = document.querySelector("#todo > div:not(.title)");
const inProgress = document.querySelector("#inProgress > div:not(.title)");
const done = document.querySelector("#done > div:not(.title)");
const blocked = document.querySelector("#blocked > div:not(.title)");
const titleInput = document.querySelector("input");
const descInput = document.querySelector("textarea");
const checkbox = document.querySelector("#check");

const [priorityInput, statusInput] = document.querySelectorAll("select");

const Form = document.querySelector("form");

let index = 0;

let edittingItem = null;
const cardtemp = (title, description, id, priority) => {
  return `<div class="card">
  <button onclick="changeMode(${id})" class="done">Done</button>
  <div class="content">
    <h1>${title}</h1>
    <p>${description}</p>
  
  </div>
  
  <div class="buttons">
    <button onclick= "editItem(${id})" class="edit">E</button>
  <button onclick= "deleteItem(${id})" class="delete">D</button>
  <div class="priority">${priority}</div>
  </div>
  
</div>`;
};

newBtn.addEventListener("click", () => {
  Form.querySelector("button").textContent = "Create";
  container.classList.add("modal");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("modal");
});

//data geed obj arr uusgej bna
let data = [];

//Data gaa setlej bna

const setData = (arr) => {
  data = arr.sort((a, b) => a.priorityIndex - b.priorityIndex);
  render();
};

const render = () => {
  cards.forEach((cards) => {
    cards.innerHTML = "";
  });

  data.forEach((item) => {
    if (item.statusIndex === 0) {
      todo.innerHTML += cardtemp(
        item.title,
        item.description,
        item.id,
        item.priority
      );
    } else if (item.statusIndex === 1) {
      inProgress.innerHTML += cardtemp(
        item.title,
        item.description,
        item.id,
        item.priority
      );
    } else if (item.statusIndex === 2) {
      done.innerHTML += cardtemp(
        item.title,
        item.description,
        item.id,
        item.priority
      );
    } else {
      blocked.innerHTML += cardtemp(
        item.title,
        item.description,
        item.id,
        item.priority
      );
    }
  });
};

Form.addEventListener("submit", (ev) => {
  isCreate = Form.querySelector("button").textContent;
  ev.preventDefault();
  //datagaa awch bna
  if (isCreate === "Create") {
    // let priorityIndex;
    const title = titleInput.value;
    const desc = descInput.value;
    const priority = priorityInput.value;
    const priorityIndex = priorityInput.selectedIndex;
    const statusIndex = statusInput.selectedIndex;
    const mydate = new Date();
    const newData = [
      ...data,
      {
        id: index,
        title: title,
        description: desc,
        priority: priority,
        priorityIndex: priorityIndex,
        statusIndex: statusIndex,
        date: mydate,
        modifyDate: null,
      },
    ];

    index++;
    setData(newData);
    container.classList.remove("modal");
    titleInput.value = "";
    descInput.value = "";
  }
  if (isCreate === "Edit") {
    const title = titleInput.value;
    const desc = descInput.value;
    const priority = priorityInput.value;
    const priorityIndex = priorityInput.selectedIndex;
    const statusIndex = statusInput.selectedIndex;
    const modifyDate = new Date();
    const updatedData = data.map((el) => {
      if (el.id === edittingItem) {
        (el.title = title),
          (el.description = desc),
          (el.priority = priority),
          (el.priorityIndex = priorityIndex),
          (el.statusIndex = statusIndex),
          (el.modifyDate = modifyDate);
      }
      return el;
    });
    setData(updatedData);
    container.classList.remove("modal");
  }
});
render();

//delete hiih
const deleteItem = (id) => {
  const newData = [...data].filter((item) => item.id !== id);
  setData(newData);
};
//status done bolgoh
const changeMode = (id) => {
  const newData = data.map((el) => {
    if (el.id === id) {
      el.statusIndex = 2;
    }
    return el;
  });
  statusInput = setData(newData);
};

//statusiin lawlah
const statuses = ["todo", "inProgress", "done", "blocked"];

//edit modal duudah
const editItem = (id) => {
  edittingItem = id;
  Form.querySelector("button").textContent = "Edit";
  const el = data.find((item) => item.id === id);
  titleInput.value = el.title;
  descInput.value = el.description;
  priorityInput.value = el.priority;
  statusInput.value = statuses[Number(el.statusIndex)];
  container.classList.add("modal");
};
