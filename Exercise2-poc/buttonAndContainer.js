let input = document.getElementById("inputText");
let button = document.querySelector("button");
let form = document.querySelector("#form");
let container = document.querySelector("#container");
let output = document.querySelector("h3");


input.addEventListener("keyup",()=>{
    if(input.value.length>=2){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
})

// var capture = false;

input.addEventListener("click",(e)=>{
    e.stopPropagation();
},false);

button.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Button was clicked!!");
    output.innerHTML = `Entered value is ${input.value}`;
},false)

form.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("Form is pressed!!");
    
},false)


container.addEventListener("click",(e)=>{
    console.log("Container is clicked!!");
    e.stopPropagation();
},true)