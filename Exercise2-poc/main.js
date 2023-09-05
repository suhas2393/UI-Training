

let input = document.getElementById("inputText");
let button = document.querySelector("button");
let form = document.querySelector("#form");
let container = document.querySelector("#container");
let output = document.querySelector("h3");

input.addEventListener("keyup",()=>{
    if(input.value.length === 1 && Number(input.value)>=0 && Number(input.value)<=9){
            button.disabled = false;
    }
    else{
        button.disabled = true;
    }
})


var capture = false;

input.addEventListener("click",(e)=>{
    e.stopPropagation();
},capture);

button.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Button was clicked!!");
    if(Number(input.value) === 0){
        
        e.stopPropagation();
    }
    else if(Number(input.value) % 2 === 0){
        e.stopPropagation();
        const customEvent = new Event('customEvent');
        container.dispatchEvent(customEvent);
    } 

    output.innerHTML = `Entered value is ${input.value}`;
},capture)

form.addEventListener("click",(e)=>{

    console.log("Form is pressed!!");
    if (Number(input.value) %2 === 1){
        e.stopPropagation();
    }
},capture)

container.addEventListener("click",()=>{
    console.log("Container is clicked!!");
},capture)

container.addEventListener('customEvent',()=>{
    console.log("Custom event Container is clicked!!");
})

