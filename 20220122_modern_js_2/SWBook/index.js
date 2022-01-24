console.log(window.swbook);
// js-t ide
const tBody = document.querySelector("#tBody");

/**
 * Create the table with document.createElement
 * Unused, just for edicational purposes
 *
 * @param {Array<SWCharacter>} database
 */
function renderTable(database) {
  for (let i = 0; i < database.length; ++i) {
    let newTr = document.createElement("tr");
    let newTd = document.createElement("td");
    let newTd2 = document.createElement("td");

    newTr.append(newTd, newTd2);
    newTd.innerText = database[i].name;
    newTd2.innerText = database[i].gender;
    tBody.append(newTr);

    newTr.addEventListener("click", function (event) {
      console.log(newTr);
      console.log(database[i].birth_year);
    });
  }
}

/**
 * Create the table with string literal and innerHTML
 *
 * @param {Array<SWCharacter>} database
 */
function renderTableAsStringLiteral(database) {
  for (let i = 0; i < database.length; ++i) {
    tBody.innerHTML += `
      <tr data-index="${i}">
        <td> ${database[i].name} </td>
        <td> <strong> ${database[i].gender} </strong></td>
        <td> <button class="deleteButton"> Delete </button> </td>
      </tr>
    `;
  }
}

// renderTable(window.swbook);
renderTableAsStringLiteral(window.swbook);

/**
 * Adds a single event listener to the entire tbdoy element.
 *  - Pro: More efficient than an event listener on all the rows
 *  - Pro: Will keep the table "live": if we add new rows, they will get the listener
 *  - Con: We have to manually investigate what the target of the click was and react accordingly
 */
tBody.addEventListener("click", function (event) {
  let row = event.target;
  while (row.nodeName !== "TR") {
    row = row.parentElement;
  }
  // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
  const index = Number(row.dataset.index); // row.getAttribute('data-index')
  const character = window.swbook[index];

  openModal();

  // Sets the value of each input field (when editing)
  Object.keys(character).forEach((key) => {
    form[key].value = character[key];
  });
});

let modalCloseElement = document.querySelector(".modalClose");
let modalDivElement = document.querySelector(".modal-background");

// Reusable modal closing method
const closeModal = function () {
  modalDivElement.classList.remove("open");
  modalDivElement.classList.add("closing");
  modalDivElement.addEventListener("transitionend", () => {
    modalDivElement.classList.remove("closing");
  });
};

modalCloseElement.addEventListener("click", closeModal);

const modalOpen = document.querySelector("#modalOpen");

// Reusable modal opening method
const openModal = function () {
  modalDivElement.classList.add("open");
};
modalOpen.addEventListener("click", openModal);

const form = document.getElementById("swform");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const obj = {};

  // Tombbe alakitas
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  //
  // nemtomb {0: ertek0, 1: ertek1, ...}
  // Array.from(nemtomb), [...nemtom]
  // Object.keys(nemtomb) [0,1,2,3...]
  // Object.values(nemtomb) [ertek0, ertek1...]
  // Object.entries(nemtomb) [[0, ertek0], [1, ertek1]]

  Array.from(form.elements).forEach((input) => {
    // if (value != "")
    const value = input.value;
    const name = input.name;
    if (value !== "") {
      obj[name] = value;
    }
  });

  window.swbook.push(obj);

  //
  // Ezt helyettesiti a fenti ciklus
  //
  // obj.birth_year = form.elements.birth_year.value
  // obj.eye_color = form.elements.eye_color.value
  // obj.gender = form.elements.gender.value
  // obj.hair_color = form.elements.hair_color.value
  // obj.height = form.elements.height.value
  // obj.mass = form.elements.mass.value
  // obj.name = form.elements.name.value
  // obj.skin_color = form.elements.skin_color.value

  insertRow(obj);
  closeModal();
});

const insertRow = function (character) {
  const newName = character.name;
  const newGender = character.gender;

  tBody.innerHTML += `
    <tr>
      <td>${newName}</td>
      <td><strong>${newGender}</strong></td>
      <td><button class="deleteButton">Delete</button></td>
    </tr>
  `;
};

let deleteButtons = document.querySelectorAll(".deleteButton");
let tableRows55 = tBody.querySelectorAll("tr");

// Attach event listeners to the delete buttons
// Problem: Newly inserted delete buttons will not get this listener
for (let j = 0; j < deleteButtons.length; j++) {
  deleteButtons[j].addEventListener("click", () => {
    tableRows55[j].addEventListener("animationend", () => {
      removeThis();
    });

    tableRows55[j].classList.add("remove");
    function removeThis() {
      tableRows55[j].remove();
    }
  });
}
