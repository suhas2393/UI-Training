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


input.addEventListener("click",(e)=>{
    e.stopPropagation();
},false);

button.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Button was clicked!!");
    e.stopPropagation()
    output.innerHTML = `Entered value is ${input.value}`;

},false)

form.addEventListener("click",(event)=>{

    event.stopPropagation();
    console.log("Form is pressed!!");
    
},false)


container.addEventListener("click",(e)=>{
    e.preventDefault();

    console.log("Container is clicked!!");
},true)