
  /* 
    tetel - allapot - metodusa

    Bevasarlas - kesz - betudja allitani hogy kesz v. nincs kesz
    Takaritas - nincs kesz
    JavaScript gyakorlas - nincs kesz */


    class ToDoItem {
      constructor(tetelNeve) {
        this.tetelNeve = tetelNeve;
        this.statusz = 0; // 0 - nincs kesz, 1 - kesz
      }

      kesz() {
        this.statusz = 1;
      }

      nincsKesz () {
        this.statusz = 0;
      }
    }

    class ToDo {
      constructor() {
        this.toDoLista = [];
      }

      ujTetelHozzadasa(tetelNeve) {
        // let ujTetel = new ToDoItem(tetelNeve);
        // this.toDoLista.push(ujTetel);
        this.toDoLista.push(new ToDoItem(tetelNeve))
      }
      
      tetelKesz(index) {
        // this.toDoLista[index].kesz() // ToDiItem-et adja vissza
        let keresettTetel = this.toDoLista[index]; // ToDoItem peldany
        keresettTetel.kesz(index);
      }

      tetelNincsKesz(index) {
        let keresettTetel = this.toDoLista[index]; // ToDoItem peldany
        keresettTetel.nincsKesz(index);
      }

      tetelTorlese(index) {
        this.toDoLista.splice(index, 1);
      }

      tetelek() {
        return this.toDoLista;
      }

      megjelenit() {
        let toDoCointainer = document.querySelector('#toDoCointainer');
        toDoCointainer.innerHTML = '';
        for(let tetel of this.toDoLista) {
          let statusz = '';
          let checked = false;

          if (tetel.statusz) {
            statusz = 'kész';
            checked = true;
          } else {
            statusz = 'nincs kész';
          }
            
          // console.log(tetel.tetelNeve + ' - ' + statusz);
          // toDoCointainer.innerHTML += tetel.tetelNeve + ' - ' + statusz + '<br>';

          toDoCointainer.innerHTML += tetel.tetelNeve + ' - <input type="checkbox" name="done" '+(checked?'checked':'')+'>' + statusz + '<br>';
        }
        this.checkEventSetting()
      }
      checkEventSetting() {
        let inputElems = document.querySelectorAll('#toDoCointainer input'); // nodeList
        let toDoThis = this;

        for(let i = 0; i < inputElems.length; i++) {
            inputElems[i].addEventListener('click', function (event) {
               console.log(event.target.checked)
               if (event.target.checked) {
                  toDoThis.tetelKesz(i)
               } else {
                  toDoThis.tetelNincsKesz(i)
               }

               toDoThis.megjelenit()

            });

        }
      }
    }

    
    // elsoToDoListam.ujTetelHozzadasa('Bevasarlas');   // index - 0
    // elsoToDoListam.ujTetelHozzadasa('Takaritas');     // Index - 1
    // elsoToDoListam.ujTetelHozzadasa('Takaritas');     // Index - 2
    // elsoToDoListam.ujTetelHozzadasa('JavaScript gyakorlas'); // Index - 3
    // elsoToDoListam.ujTetelHozzadasa('toDo lista');

    // elsoToDoListam.tetelKesz(0);
    // elsoToDoListam.tetelKesz(1);
    // elsoToDoListam.tetelKesz(4);

    // elsoToDoListam.tetelNincsKesz(0);

    // elsoToDoListam.tetelTorlese(2);

    // console.log(elsoToDoListam);

    // elsoToDoListam.megjelenit()
  
  function loaded(event) {
    let form = document.querySelector('form');
    console.log(form);
    let elsoToDoListam = new ToDo();

    form.addEventListener('submit', function (event) {
      console.log(event);
      event.preventDefault();
      let inputElem = event.target.querySelector('input');
      console.log('form === event.target');
      elsoToDoListam.ujTetelHozzadasa(inputElem.value);
      elsoToDoListam.megjelenit()
    })


  }
  
  window.addEventListener('load',loaded);
