import objArray from "./database.js";

var moduleArr = objArray[1];

let heading = document.createElement("h2");

heading.innerHTML = `Logged-In user : ${localStorage.getItem("username")}`;

let showLength = document.createElement("h2");

showLength.innerHTML = `Number of modules : ${moduleArr.length}`

let userText = document.querySelector(".userText");
userText.innerHTML = `Logged-In user : ${localStorage.getItem("username")}`

const main = document.querySelector("main")
main.append(heading);
main.append(showLength);

var container = document.createElement("div");
container.className = 'container';



moduleArr.forEach((data)=>{
    container.innerHTML+=`
    <div class="moduleBox">${data.name}</div>
    `
})


var modules = container.querySelectorAll('.moduleBox')

modules.forEach((item)=>{

    item.addEventListener('click',(e)=>{

        let value = e.target.innerText.replace(/\s+/g,'').trim()
        window.location.href = 'display.html'+"?key="+value;
    })

})


main.append(container)






