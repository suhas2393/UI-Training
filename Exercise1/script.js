import Backpack from "./components/class.js";
import backpackArray from "./components/data.js";

let name = document.querySelector("#name");
let color = document.querySelector("#color");
let volume = document.querySelector("#volume");
let price = document.querySelector("#price");
let manyear = document.querySelector("#manyear");
let submit = document.querySelector("button");

let main = document.querySelector("main");

const article = document.createElement("article");
article.innerHTML = ``;
var id=0;

submit.addEventListener("click",(event)=>{
    id=id+1;
    event.preventDefault();
    let bagPackName = name.value;
    bagPackName = new Backpack(
        id,
        name.value,
        color.value,
        volume.value,
        price.value,
        manyear.value
    )
    backpackArray.push(bagPackName);
    // console.log(backpackArray);
    
    // console.log("Button is clicked!!!");

    backpackArray.forEach((ele)=>{
        article.innerHTML+=
        `
        <div id=${ele.id}>
        Name : ${ele.name}
        Color : ${ele.color}
        Volume : ${ele.volume}
        Price : ${ele.price}
        Manufature year : ${ele.manyear}
        </div>
        `

    // console.log(ele.name);
    }

    )
})

main.append(article);

// function arrayAppend()

