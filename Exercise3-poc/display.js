import objArray from "./database.js";

const UrlParams = new URLSearchParams(window.location.search);

UrlParams.toString()

const key = UrlParams.get('key');
// var re = /[^0-9](?=[0-9])/g; 
var newKey = key.replace(/[^0-9](?=[0-9])/g, '$& ');
let userText = document.querySelector(".userText");
userText.innerHTML = `Logged-In user : ${localStorage.getItem("username")}`

const main = document.querySelector("main");

let heading = document.createElement('h3');
heading.className = "moduleDesc"
heading.innerHTML = `Description for ${newKey}`;

let textBox = document.createElement('div');
textBox.className = 'textBox';

objArray[1].forEach((item)=>{
    if(item.name === newKey){
        textBox.innerHTML = item.text;
    }
})

main.append(heading);
main.append(textBox);


console.log(newKey);


