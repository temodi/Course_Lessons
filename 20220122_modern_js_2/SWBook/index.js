console.log(window.swbook);
// js-t ide
const tBody = document.querySelector("#tBody");
const modalCloseElement = document.querySelector(".modalClose");
const modalDivElement = document.querySelector(".modal-background");
const formTemplate = document.getElementById('characterFormTemplate');

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
window.swbook.forEach((character, index) => character.id = index)

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
  if (event.target.classList.contains('deleteButton')) {
    deleteRow(index);
  } else {
    openEditModal(index)
  }
});

// Reusable modal closing method
const closeModal = function () {
  modalDivElement.classList.remove("open");
  modalDivElement.classList.add("closing");
  modalDivElement.addEventListener("transitionend", () => {
    modalDivElement.classList.remove("closing");
  });
  clearModalContent(modalDivElement)
};

modalCloseElement.addEventListener("click", closeModal);

function openAddNewModal() {
  const modal = openModal();
  const modalContentArea = modal.querySelector('.js_modal-content');

  // Check if the element exists to make sure we won't get runtime error
  if (modalContentArea) {
    modalContentArea.innerHTML = formTemplate.innerHTML;

    const form = modalContentArea.querySelector('#swform');
    // Add form submit event
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const character = {
        // New id should be larger than the id of the last element's id
        id: window.swbook[window.swbook.length - 1].id + 1
      };

      // Fill characterect form form values using input.name as key
      Array.from(form.elements).forEach((input) => {
        const value = input.value;
        const name = input.name;
        if (value !== "") {
          character[name] = value;
        }
      });

      // Add new character to table
      insertRow(character);
      // Add new character to collection
      window.swbook.push(character);
      closeModal();
    });
  }
}

function openEditModal(index) {
  const modal = openModal();
  const modalContentArea = modal.querySelector('.js_modal-content');

  const characterIndex = window.swbook.findIndex(character => character.id === index);
  const character = window.swbook[characterIndex];

  if (!character) {
    throw new Error('Character does not exists.');
  }

  // Check if the element exists to make sure we won't get runtime error
  if (modalContentArea) {
    modalContentArea.innerHTML = formTemplate.innerHTML;

    const form = modalContentArea.querySelector('#swform');

    // Sets the value of each input field (when editing)
    Object.keys(character).forEach((key) => {
      form[key].value = character[key];
    });

    // Add form submit event
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const characterEdited = {
        id: character.id
      };

      // Fill characterEdited from values using input.name as key
      Array.from(form.elements).forEach((input) => {
        const value = input.value;
        const name = input.name;
        if (value !== "") {
          characterEdited[name] = value;
        }
      });

      // Find character in collection
      // Replace character with new character in collection
      window.swbook.splice(characterIndex, 1, characterEdited);
      // Replace character with newly rendered row in table
      replaceRow(characterEdited);
      closeModal();
    });
  }
}

const addNewCharacterButton = document.querySelector("#addNewCharacterButton");

if (addNewCharacterButton) {
  addNewCharacterButton.addEventListener('click', openAddNewModal)
}

// Reusable modal opening method
const openModal = function () {
  modalDivElement.classList.add("open");
  return modalDivElement;
};

function clearModalContent(modal) {
  const modalContentArea = modal.querySelector('.js_modal-content');

  // Check if the element exists to make sure we won't get runtime error
  if (modalContentArea) {
    // Remove everything from the modal content
    modalContentArea.innerHTML = ""
  }
}

const insertRow = function (character) {
  const newName = character.name;
  const newGender = character.gender;

  tBody.innerHTML += `
    <tr data-index="${character.id}">
      <td>${newName}</td>
      <td><strong>${newGender}</strong></td>
      <td><button class="deleteButton">Delete</button></td>
    </tr>
  `;
};

function replaceRow(character) {
  const rowToReplace = tBody.querySelector(`tr[data-index="${character.id}"]`);
  const newRowContent = `
    <td>${character.name}</td>
    <td><strong>${character.gender}</strong></td>
    <td><button class="deleteButton">Delete</button></td>
  `;

  if (rowToReplace) {
    rowToReplace.innerHTML = newRowContent;
  }
}

function deleteRow(index) {
  const tableRow = tBody.querySelector(`tr[data-index="${index}"]`);

  if (tableRow) {
    // Remove from table
    tableRow.addEventListener("animationend", () => tableRow.remove());
    tableRow.classList.add("remove");
    // Remove from collection
    const characterIndex = window.swbook.findIndex(character => character.id === index);
    window.swbook.splice(characterIndex, 1);
  }
}