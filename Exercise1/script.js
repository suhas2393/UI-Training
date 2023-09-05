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

var id=0;

submit.addEventListener("click",(event)=>{
    article.innerHTML = ``;
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

    backpackArray.forEach((ele)=>{
        article.innerHTML+=
        `

        <div id=${ele.id} class="card mx-auto mt-3" style="width:18rem;">
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> Name : ${ele.name} </li>
        <li class="list-group-item"> Color : ${ele.color} </li>
        <li class="list-group-item"> Volume : ${ele.volume} </li>
        <li class="list-group-item"> Price : ${ele.price} </li>
        <li class="list-group-item"> Manufature year : ${ele.manyear} </li>
        </ul>
        </div>

        `

    }

    )
})

main.append(article);


