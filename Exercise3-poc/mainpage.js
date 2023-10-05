import objArray from "./database.js";

var moduleArr = objArray[1];



let showLength = document.createElement("h2");

showLength.className = "moduleLen"

showLength.innerHTML = `Number of modules : ${moduleArr.length}`

let userText = document.querySelector(".userText");
userText.innerHTML = `Logged-In user : ${localStorage.getItem("username")}`

const main = document.querySelector("main")

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
        console.log(item.innerHTML)
        let value = e.target.innerText.replace(/\s+/g,'').trim()
        window.location.href = 'display.html'+"?key="+value;
    })

})


main.append(container)






