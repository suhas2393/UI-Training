

let input = document.getElementById("inputText");
let button = document.querySelector("button");
let form = document.querySelector("#form");
let container = document.querySelector("#container");
let output = document.querySelector("h3");

var expr = /[0-9]/g;
input.addEventListener("keyup",()=>{
    console.log(input.value)
    if(String(input.value).length>=2){
        // if(input.value<=0 && input.value>=9){
            button.disabled = true;
        // }
    }
    else{
        button.disabled = false;
    }
})


var capture = false;

input.addEventListener("click",(e)=>{
    e.stopPropagation();
},capture);

button.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Button was clicked!!");
    output.innerHTML = `Entered value is ${input.value}`;
},capture)

form.addEventListener("click",()=>{
    console.log("Form is pressed!!");
},capture)

container.addEventListener("click",()=>{
    console.log("Container is clicked!!");
},capture)


