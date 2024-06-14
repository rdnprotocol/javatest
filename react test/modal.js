const newBtn = document.getElementById("newBtn");
const closeBtn = document.getElementById("closeBtn");
const container = document.getElementById("container");
const cards = document.querySelector(".cards");
const titleInput = document.querySelector("input");
const descInput = document.querySelector("textarea");
const Form = document.querySelector("form");
let index = 0;
const cardtemp = (title, description, id) => {
  return `<div class="card">
  <div>
    <h1>${title}</h1>
    <p>${description}</p>
  </div>
  <button onclick= "deleteItem(${id})" class="delete">устгах</button>
</div>`;
};

newBtn.addEventListener("click", () => {
  container.classList.add("modal");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("modal");
});

//data geed obj arr uusgej bna
let data = [];

//Data gaa setlej bna

const setData = (arr) => {
  data = arr;
  render();
};
//data renderlej bna
const render = () => {
  cards.innerHTML = "";
  data.forEach((item) => {
    cards.innerHTML += cardtemp(item.title, item.description, item.id);
  });
};

Form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  //datagaa awch bna

  const title = titleInput.value;
  const desc = descInput.value;
  const newData = [
    ...data,
    {
      id: index,
      title: title,
      description: desc,
    },
  ];
  index++;

  setData(newData);
  container.classList.remove("modal");
  // deleteBtn.forEach((element) => {
  //   element.addEventListener("click", () => {
  //     element.parentElement.remove();
  //   });
  // });
});
render();

const deleteItem = (id) => {
  const newData = [...data].filter((item) => item.id !== id);
  setData(newData);
};
