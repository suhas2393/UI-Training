let input = document.getElementById("inputText");
let button = document.querySelector("button");
let form = document.querySelector("#form");
let container = document.querySelector("#container");
let output = document.querySelector("h3");


input.addEventListener("keyup",()=>{
    console.log(input.value)
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
    e.preventDefault();
    console.log("Button was clicked!!");
    output.innerHTML = `Entered value is ${input.value}`;
},capture)

form.addEventListener("click",(event)=>{
    console.log("Form is pressed!!");
    event.stopPropagation();
},capture)

container.addEventListener("click",()=>{
    console.log("Container is clicked!!");
},capture)

