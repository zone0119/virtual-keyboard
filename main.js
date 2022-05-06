
export class Keyboard {
    constructor(language ) {
      this._language = language; 
 
      if (localStorage.getItem('mylang') === null) 
        this._language = 'en'; 
      else 
      this._language = localStorage.getItem('mylang');
 
       
      this._layoutTemplate = {};
      this._currLayout = 'default';



      if (localStorage.getItem('caps') === null) 
        this._capsOn = 0;
      else 
        this._capsOn = localStorage.getItem('caps');
 

     
      this._shiftOn = 0;
    }

    get language() {
        return this._language;
    }
    
    set language(newValue) {
        this._language = newValue;
    }



    layout() {


      const lay1En = ["`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', "Backspace"];
 const lay1EnShift = ["~", '!', '@', '#', '$', '%', '^', '&', '*', "(", ")", "_", "+", "Backspace"];
 const keyCode1= ["Backquote", 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', "Backspace"];



      const lay1Ru = ["`", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', "Backspace"];
 const lay1RuShift = ["~", '!', '@', '#', '$', '%', '^', '&', '*', "(", ")", "_", "+", "Backspace"];


   const lay2En = ["Tab", 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', "[", "]", '\\', 'Del'];
const lay2EnShift = ["Tab", 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', "O", "P", "{", "}", "|", 'Del'];
const keyCode2 = ["Tab", 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", 'Delete'];

   const lay2Ru = ["Tab", 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', "х", "ъ", '\\', 'Del'];
const lay2RuShift = ["Tab", 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', "Щ", "З", "Х", "Ъ", "/", 'Del'];


      const lay3En = ["Caps", 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter" ];
 const lay3EnShift = ["Caps", 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', "Enter" ];
 const keyCode3 = ["CapsLock", 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', "Enter" ];

 const lay3Ru = ["Caps", 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", "Enter" ];
 const lay3RuShift = ["Caps", 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', "Enter" ];


   const lay4En = ["Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', "↑", "Shift" ];
const lay4EnShift = ["Shift", 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', "↑", "Shift" ];
const keyCode4 = ["ShiftLeft", 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', "ArrowUp", "ShiftRight" ];

   const lay4Ru = ["Shift", 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', "↑", "Shift" ];
const lay4RuShift = ["Shift", 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', "↑", "Shift" ];


   const lay5En = ["Ctrl", 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'  ];
const lay5EnShift = ["Ctrl", 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'  ];
const keyCode5 = ["ControlLeft", 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'  ];


      this._layoutTemplate = {
                          
                keycode: {  
                    value: [keyCode1, keyCode2, keyCode3, keyCode4, keyCode5],
                    lang: {
                            ru: {
                                default: [lay1Ru, lay2Ru, lay3Ru, lay4Ru, lay5En ], 
                                shift: [lay1RuShift, lay2RuShift, lay3RuShift, lay4RuShift, lay5EnShift],
                                caps: [lay1En , this.upperCase(lay2Ru), this.upperCase(lay3Ru), this.upperCase(lay4Ru), lay5En ],
                                
                            },
                            en: {
                                default: [lay1En, lay2En, lay3En, lay4En, lay5En ], 
                                shift: [lay1EnShift, lay2EnShift, lay3EnShift, lay4EnShift, lay5EnShift],                        
                                caps: [lay1En , this.upperCase(lay2En), this.upperCase(lay3En), this.upperCase(lay4En), lay5En  ]
                            }
                    }
                } 
                
    };

    this.createKeyboard();

     

  }


  createKeyboard(){    
    let step;
    for (step = 0; step < this._layoutTemplate.keycode.value.length; step++) {
        
        this._layoutTemplate.keycode.value[step].map((symbol, index) => {            
            this.createButton( symbol, this._layoutTemplate.keycode.lang, step, index, '' );          
        });
    }          

   
  }


  reCreateKeyboardShift(){    
    let step;
    for (step = 0; step < this._layoutTemplate.keycode.value.length; step++) {
        
        this._layoutTemplate.keycode.value[step].map((symbol, index) => {       
          if (symbol === 'ShiftLeft' || symbol === 'ShiftRight' )
          {     
            this.createButton( symbol, this._layoutTemplate.keycode.lang, step, index, 'clicked' );   
          }   
          else
          {
            this.createButton( symbol, this._layoutTemplate.keycode.lang, step, index, '' );   
          }    
        });
    }          

   
  }

  reCreateKeyboardCaps(){    
    let step;
    for (step = 0; step < this._layoutTemplate.keycode.value.length; step++) {
        
        this._layoutTemplate.keycode.value[step].map((symbol, index) => {       
          if(symbol === 'CapsLock' || this._capsOn == true && symbol === 'CapsLock')
          {
            if(this._capsOn === 1)
            this.createButton( symbol, this._layoutTemplate.keycode.lang, step, index, 'clicked' ); 
            else
            this.createButton( symbol, this._layoutTemplate.keycode.lang, step, index, '' );     
          }      
          else
          {
            this.createButton( symbol, this._layoutTemplate.keycode.lang, step, index, '' );   
          }    
        });
    }          

   
  }

    
    listenEvent(){
      document.addEventListener('keydown', (e) => this.listKeyDown(e));
      document.addEventListener('keyup', (e) => this.listKeyUp(e));

      const btnChoose = document.querySelector('#keyboard-container');
      btnChoose.addEventListener('mousedown', (e) => this.listMousedown(e));
      btnChoose.addEventListener('mouseup', (e) => this.listMouseup(e));

      const textAre = document.querySelector('textarea');
      textAre.addEventListener('click', (e) => this.getClickedPos(e));


      
      
    }


    listMousedown(e) {
      if(e.target.id != 'keyboard-container')
      {
        console.log('listMousedown +* ');
        console.log(e.target.dataset.keycode);
        const btnChoose = document.querySelector(`[data-keycode="${e.target.dataset.keycode}"]`);
        btnChoose.classList.add('clicked');


      if (e.target.dataset.keycode === 'CapsLock')
      {
        console.log('listMousedown CapsLock * ');    
        this._currLayout = 'caps';


     

        
        if (this._capsOn === 1) 
        {
          this._capsOn = 0; 
          this._currLayout = 'caps'; 
          const KBcontainer = document.querySelector("#keyboard-container");
          KBcontainer.innerHTML = '';
          this.reCreateKeyboardCaps();
        }        
        else 
        {
          this._capsOn =  1; 
          this._currLayout = 'default'; 
          const KBcontainer = document.querySelector("#keyboard-container");
          KBcontainer.innerHTML = '';
          this.reCreateKeyboardCaps();
        }
         
        localStorage.setItem('caps', this._capsOn);
        
      }
      else if (e.target.dataset.keycode === 'Backspace')
      { 
        console.log('backs');
        const textAre = document.querySelector('textarea');

        let getCPos = this.getCaretPos(textAre);        

        
        textAre.innerHTML = textAre.value.slice(0,getCPos-1) + textAre.value.slice(getCPos, textAre.value.length);

        textAre.setSelectionRange(getCPos, getCPos);
        
      }
      else if (e.target.dataset.keycode === 'Tab')
      { 
        console.log('tab');
        document.querySelector('textarea').innerHTML = document.querySelector('textarea').innerHTML + '    ';
        
      }
      else if (e.target.dataset.keycode === 'Delete')
      { 
        console.log('Deletes');
        
        const textAre1 = document.querySelector('textarea');

        let getCPos1 = this.getCaretPos(textAre1);        

        
        textAre1.innerHTML = textAre1.value.substring(0, getCPos1)
         + textAre1.value.substring( getCPos1 + 1 , textAre1.length  );
         

      }
      else if (e.target.dataset.keycode === 'Enter')
      { 
        console.log('Enter');
        document.querySelector('textarea').innerHTML = document.querySelector('textarea').innerHTML + '\n';
        
      }
      else if (e.target.dataset.keycode === 'Space')
      { 
        console.log('Space');
        document.querySelector('textarea').innerHTML = document.querySelector('textarea').innerHTML + ' ';
        
      }
      else if (e.target.dataset.keycode === 'ShiftLeft' || e.target.dataset.keycode === 'ShiftRight')
      {
        this._currLayout = 'shift'; 
          
        const KBcontainer = document.querySelector("#keyboard-container");
        KBcontainer.innerHTML = '';
        this.reCreateKeyboardShift();

      }

     
        this.writeWord(btnChoose);

        


      }
    }

    listMouseup(e) {
      if(e.target.id != 'keyboard-container')
      {
        console.log('listMouseup + ' + e.target);
        

            if (e.target.dataset.keycode === 'CapsLock')
            {

              if (this._capsOn === 1) 
              {
                this._currLayout = 'caps'; 
                const KBcontainer = document.querySelector("#keyboard-container");
                KBcontainer.innerHTML = '';
                this.reCreateKeyboardCaps();
              }        
              else 
              {
                this._currLayout = 'default'; 
                const KBcontainer = document.querySelector("#keyboard-container");
                KBcontainer.innerHTML = '';
                this.reCreateKeyboardCaps();
              }


          }
          else{
            const btnChoose = document.querySelector(`[data-keycode="${e.target.dataset.keycode}"]`);
            btnChoose.classList.remove('clicked');
          }
        }
    }

    listKeyDown(e){
      console.log(e.ctrlKey + ' - listKeyDown + ' + e.code);

      const btnChoose = document.querySelector(`[data-keycode="${e.code}"]`);
      btnChoose.classList.add('clicked');
      console.log(btnChoose);
      //select lang
      if ((e.code === 'ControlLeft' && e.altKey === true) || (e.code === 'AltLeft' && e.ctrlKey === true))
      {
        //e.preventDefault();
        console.log('_language * ');         
        if (this._language === 'ru') 
            this._language = 'en'; 
        else 
            this._language = 'ru'; 

        localStorage.setItem('mylang', this._language);
       
        const KBcontainer = document.querySelector("#keyboard-container");
        KBcontainer.innerHTML = '';
        this.createKeyboard();
         
      }
      else if (e.code === 'CapsLock')
      {
        console.log('upper CapsLock * ');    
        this._currLayout = 'caps';


        if (this._capsOn === 1) 
        this._capsOn = 0; 
        else 
        this._capsOn =  1; 

        localStorage.setItem('caps', this._capsOn);

        
        const KBcontainer = document.querySelector("#keyboard-container");
        KBcontainer.innerHTML = '';
        this.reCreateKeyboardCaps();
      }
      else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight')
      { 
        this._currLayout = 'shift'; 
        
        const KBcontainer = document.querySelector("#keyboard-container");
        KBcontainer.innerHTML = '';
        this.reCreateKeyboardShift();
        
      }
      else if (e.code === 'Backspace')
      { 
        console.log('Backspace*-*');
        const textAre = document.querySelector('textarea');

        let getCPos = this.getCaretPos(textAre);        

        
        textAre.innerHTML = textAre.value.slice(0,getCPos-1) + textAre.value.slice(getCPos, textAre.value.length);
        
       // textAre.setSelectionRange(textAre.value.length,textAre.value.length);
       textAre.setSelectionRange(getCPos, getCPos);
        
      }
      else if (e.code === 'Tab')
      { 
        e.preventDefault();
        console.log('tab');
        document.querySelector('textarea').innerHTML = document.querySelector('textarea').innerHTML + '    ';
        
      }
      else if (e.code === 'Enter')
      { 
        console.log('Enter');
        document.querySelector('textarea').innerHTML = document.querySelector('textarea').innerHTML + '\n';
        
      }
      else if (e.code === 'Space')
      { 
        e.preventDefault();
        console.log('Space');
        document.querySelector('textarea').innerHTML = document.querySelector('textarea').innerHTML + ' ';
        
      }







      this.writeWord(btnChoose);
    }



    listKeyUp(e){
      console.log('listKeyUp + ' + e.code);

      const btnChoose = document.querySelector(`[data-keycode="${e.code}"]`);
      btnChoose.classList.remove('clicked');


      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight')
      {
        this._currLayout = 'default'; 
        const KBcontainer = document.querySelector("#keyboard-container");
        KBcontainer.innerHTML = '';
        this.createKeyboard();
        
      }
      else if (e.code === 'CapsLock')
      {

        if (this._capsOn === 1) 
        {
          this._currLayout = 'caps'; 
          const KBcontainer = document.querySelector("#keyboard-container");
          KBcontainer.innerHTML = '';
          this.reCreateKeyboardCaps();
        }        
        else 
        {
          this._currLayout = 'default'; 
          const KBcontainer = document.querySelector("#keyboard-container");
          KBcontainer.innerHTML = '';
          this.reCreateKeyboardCaps();
        }
         

        

        


        
      }
    }

    writeWord(btnChoose)
    {
      const currLang = this._language;
      const currentLayout = this._currLayout;
      const word = this._layoutTemplate.keycode.lang[currLang][currentLayout][btnChoose.dataset.step][btnChoose.dataset.index];
      switch (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) {
        case 'Ctrl':
          break;
        case 'Alt':
          break;
          case 'Tab':
            break;
          case 'Backspace':
            break;
            case 'Del':
              break;
            case 'Caps':
              break;
              case 'Enter':
                break;
              case 'Shift':
                break;
                case 'Win':
                  break;
                case 'Space':
                  break;
        default:

          const textAr2 = document.querySelector('textarea');
          let getCPos = this.getCaretPos(textAr2);
          

          textAr2.innerHTML += word;
          textAr2.setSelectionRange(getCPos, getCPos);
      }
     
    }


    upperCase(arr) {
        return arr.map(function(x){ return x.toUpperCase() });
    }
    
    createButton(symbol, lang, step, index, clicked ) {
      
        const currLang = '' + this.language ;
        const currentLayout = this._currLayout;
        console.log(currLang);

        //console.log(symbol + ' восток' + lang[currLang][currentLayout][step][index]);
        
        const KBcontainer = document.querySelector("#keyboard-container");
   
        
        const keyCode = symbol;
        const keyCodeToHumanReadbleCode = lang[currLang][currentLayout][step][index]; 
        
        const keyBTN = document.createElement('button');
        keyBTN.setAttribute('data-keycode', keyCode);
        keyBTN.setAttribute('data-step', step);
        keyBTN.setAttribute('data-index', index);
      
        keyBTN.classList.add('btn');
        keyBTN.classList.add(`btn-${keyCode}` );

        if(clicked == 'clicked')
        keyBTN.classList.add('clicked');

        keyBTN.textContent = keyCodeToHumanReadbleCode;
       
        

        /*
        const span = document.createElement('span');
        span.textContent = keyCodeToHumanReadbleCode;
        keyBTN.appendChild(span);
        
        */

       
        KBcontainer.appendChild(keyBTN);
        
        
    }
    
    focusOn()
    {
      const textField = document.createElement('textarea');
      textField.focus();
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

        const divText = document.createElement('div');
        divText.setAttribute('id', 'property');
        divText.innerHTML = `Клавиатура создана в операционной системе Windows<br>
        Для переключения языка комбинация: левыe ctrl + alt`;
        div.appendChild(divText);


        this.layout();
    }

    
    getCaretPos(textareaField) {
      return textareaField.selectionStart;
    }

    getClickedPos() {
      
      const textAr = document.querySelector('textarea');
     let w = this.getCaretPos(textAr);
     console.log('getClickedPos' + w);

     this.getSelection();

    }

    getSelection()
    {
      const textAr = document.querySelector('textarea');
      console.log('getSelection');
      console.log(textAr.selectionStart, textAr.selectionEnd);
      textAr.setSelectionRange(textAr.selectionStart, textAr.selectionEnd);
      textAr.focus();
    }

    
  };
  

