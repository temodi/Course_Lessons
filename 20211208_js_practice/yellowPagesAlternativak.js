// 2 for ciklussal
function createPhoneBook2for(names, phoneNumbers) { // formalis parameterek
  let phoneBook = [];

  // eloszor berakjuk csak a neveket
  for (let i = 0; i < names.length; i++) {
    let person = { name: names[i] };
    phoneBook.push(person);
  }

  // az elobb mar beraktuk a neveket, szoval a phoneBook tele van
  // ilyen objektumokkal: { name: 'valaki' }
  for (let i = 0; i < phoneNumbers.length; i++) {
    // A phoneBook tomb i-edik eleme egy objektum
    // amin mukodik a "dot notation"
    phoneBook[i].mobile = phoneNumbers[i]
  }

  return phoneBook;
}

function findByMobileKivalasztas(phoneBook, mobile) {
  let talaltElem = null;

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].mobile === mobile) {
      talaltElem = phoneBook[i];
    }
  }

  return talaltElem;
}

function findByMobileWithFind(phoneBook, mobile) {
  return phoneBook.find(function (bejegyzes) {
    return bejegyzes.mobile === mobile;
  });
}
function findByMobileArrow(phoneBook, mobile) {
  return phoneBook.find(bejegyzes => bejegyzes.mobile === mobile);
}

function indexByMobileWithFindIndex(phoneBook, mobile) {
  return phoneBook.findIndex(function (bejegyzes) {
    return bejegyzes.mobile === mobile;
  });
}