

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
      //Code values on Windows KeyboardEvent.code
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values

      const lay1En = ["`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', "Backspace"];
 const lay1EnShift = ["~", '!', '@', '#', '$', '%', '^', '&', '*', "(", ")", "_", "+", "Backspace"];
 const keyCode1= ["Backquote", 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'NumpadSubtract', 'Equal', "Backspace"];



      const lay1Ru = ["`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', "Backspace"];
 const lay1RuShift = ["~", '!', '@', '#', '$', '%', '^', '&', '*', "(", ")", "_", "+", "Backspace"];


   const lay2En = ["Tab", 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', "[", "]", '\\', 'Del'];
const lay2EnShift = ["Tab", 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', "O", "P", "{", "}", "|", 'Del'];
const keyCode2 = ["Tab", 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", 'NumpadDecimal'];

   const lay2Ru = ["Tab", 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', "х", "ъ", '\\', 'Del'];
const lay2RuShift = ["Tab", 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', "Щ", "З", "Х", "Ъ", "/", 'Del'];


      const lay3En = ["Caps", 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter" ];
 const lay3EnShift = ["Caps", 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', "Enter" ];
 const keyCode3 = ["CapsLock", 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', "Enter" ];

 const lay3Ru = ["Caps", 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", "Enter" ];
 const lay3RuShift = ["Caps", 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', "Enter" ];


   const lay4En = ["Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', "↑", "Shift" ];
const lay4EnShift = ["Shift", 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', "↑", "Shift" ];
const keyCode4 = ["ShiftLeft", 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'NumpadDecimal', 'Period', 'Slash', "ArrowUp", "ShiftLeft" ];

   const lay4Ru = ["Shift", 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', "↑", "Shift" ];
const lay4RuShift = ["Shift", 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', "↑", "Shift" ];


   const lay5En = ["Ctrl", 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'  ];
const lay5EnShift = ["Ctrl", 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'  ];
const keyCode5 = ["ControlLeft", 'MetaLeft', 'AltLeft', 'Space', 'AltLeft', 'ControlLeft', 'ArrowLeft', 'ArrowDown', 'ArrowRight'  ];


      const layoutTemplate = {
                          
                keycode: {  
                    value: [keyCode1, keyCode2, keyCode3, keyCode4, keyCode5],
                    lang: {
                            ru: {
                                default: [lay1Ru, lay2Ru, lay3Ru, lay4Ru, lay5En ], 
                                shift: [lay1RuShift, lay2RuShift, lay3RuShift, lay4RuShift, lay5EnShift],
                                caps: [lay1En , this.upperCase(lay2En), this.upperCase(lay3En), this.upperCase(lay4En), lay5En ],
                                
                            },
                            en: {
                                default: [lay1En, lay2En, lay3En, lay4En, lay5En ], 
                                shift: [lay1EnShift, lay2EnShift, lay3EnShift, lay4EnShift, lay5EnShift],                        
                                caps: [lay1En , this.upperCase(lay2En), this.upperCase(lay3En), this.upperCase(lay4En), lay5En  ]
                            }
                    }
                } 
                
           
   
    };



    let step;
    for (step = 0; step < layoutTemplate.keycode.value.length; step++) {
        
        layoutTemplate.keycode.value[step].map((symbol, index) => {            
            this.createButton( symbol, layoutTemplate.keycode.lang, step, index );          
        });
    }       
    
    
      /*
      const lay3 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"];
      const doubles2 = lay2.map((symbol) => {                
          this.createButton(symbol);                
      });
       */
     

  }
    
    upperCase(arr) {
        return arr.map(function(x){ return x.toUpperCase() });
    }

    createButton(symbol, lang, step, index ) {

        console.log(symbol + ' восток' + lang.en.default[step][index]);
        
        const KBcontainer = document.querySelector("#keyboard-container");
        
        
        const keyCode = symbol; // symbol.charCodeAt(0);
        const keyCodeToHumanReadbleCode = lang.en.default[step][index]; // String.fromCharCode(keyCode);
        
        const keyBTN = document.createElement('button');
        keyBTN.setAttribute('data-keycode', keyCode);
        //keyBTN.setAttribute('id', `k_${keyCode}`);
        keyBTN.classList.add('btn');
        keyBTN.classList.add(`btn-${keyCode}` );
        //keyBTN.setAttribute('style', '');
        //transform: translateY(3px);

        const span = document.createElement('span');
        span.textContent = keyCodeToHumanReadbleCode;
        keyBTN.appendChild(span);
        KBcontainer.appendChild(keyBTN);

        
        
        
    }



    createTextArea() {
        const textField = document.createElement('textarea');
        textField.setAttribute('id', 'my-textarea');

        const container = document.querySelector("#container");
        container.appendChild(textField);

        
    }

    createContainer() {
        const div = document.createElement('div');
        div.setAttribute('id', 'container');
        document.body.appendChild(div);


        console.log('createContainer');
        this.createTextArea();
        

        const divKBBox = document.createElement('div');
        divKBBox.setAttribute('id', 'keyboard-container');
        div.appendChild(divKBBox);

        this.layout();
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
