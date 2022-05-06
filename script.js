console.log('script');


import  {Keyboard}  from '../../assets/js/main.js';


const keyboard1 = new Keyboard("en");
console.log(keyboard1.language);


window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");

    keyboard1.createContainer();
    keyboard1.focusOn();
    keyboard1.listenEvent();
    
  });

