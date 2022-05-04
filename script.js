console.log('script');


import  {Keyboard}  from '../../assets/js/main.js';


const keyboard1 = new Keyboard("RU");
console.log(keyboard1.language);

keyboard1.layout();


const keyboard2 = new Keyboard('EN');
console.log(keyboard2.language);