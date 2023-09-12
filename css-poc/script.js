let bluebutton = document.querySelector('.blue');
let redbutton = document.querySelector('.red');
let cross = document.querySelector('.cross');

let child = document.querySelector('.child');



bluebutton.addEventListener(('click'),()=>{
    console.log("Blue button is clicked!!!")
    child.className = 'child';
});

redbutton.addEventListener(('click'),()=>{
    console.log("Red button is clicked!!!");
    // child.classList.toggle('hide');
    child.className = 'hide';
});

cross.addEventListener(('click'),()=>{
    console.log("Cross button is clicked!!!")
});

