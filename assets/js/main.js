

export class Keyboard {
    constructor(language ) {
      this._language = language;
    }

    get language() {
        return `${this._language} *`;
    }
    
    set language(newValue) {
        this._language = newValue;
    }


    layout() {
        const lay1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        const doubles1 = lay1.map((symbol) => {            
            this.createButton(symbol);            
        });
        
        const lay2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"];
        const doubles2 = lay2.map((symbol) => {                
            this.createButton(symbol);                
        });
            
       

    }
    
    createButton(symbol) {
        const keyCode = symbol.charCodeAt(0);
        const keyCodeToHumanReadbleCode = String.fromCharCode(keyCode);
        
        const keyBTN = document.createElement('button');
        keyBTN.setAttribute('data-keycode', keyCode);
        keyBTN.setAttribute('id', `k_${keyCode}`);
        keyBTN.classList.add('btn');
        
        keyBTN.setAttribute('style', 'cursor: pointer; text-align: center; font-size: 32px; width: 60px; height:60px; ');
        //transform: translateY(3px);

        const span = document.createElement('span');
        span.textContent = keyCodeToHumanReadbleCode;
        keyBTN.appendChild(span);
        document.body.appendChild(keyBTN);











        
    }

    createTextArea() {
        const textField = document.createElement('textarea');
    }

    createBox() {
        const textField = document.createElement('div');
         

    }



  
  };
  


  /*
  https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/


  let elem = document.getElementById('type-here');

elem.addEventListener("keydown", function (event) {
    // The parameter event is of the type KeyboardEvent
  	addRow(event);
});
  


document
  .getElementById("to_focus")
  .addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "z") {
      // Do Something, may be an 'Undo' operation
    }
});

  */