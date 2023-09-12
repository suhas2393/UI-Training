import objArray from "./database.js";

let username = document.querySelector("#username");
let password = document.querySelector("#password");
let button = document.querySelector('button');

const date = new Date().toDateString()
// console.log(date);
let dateElement = document.querySelector(".date");
dateElement.innerHTML = date;

// console.log(objArray[0][0].username);

button.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked!!");

    for(let i = 0; i < objArray[0].length; i++) {
        if(username.value === objArray[0][i].username && password.value === objArray[0][i].password) {
            localStorage.setItem("username",username.value);
            localStorage.setItem("password",password.value);
            // window.alert("Login Successfully. Welcome "+ username.value);
            if(objArray[0][i].username === "admin"){
                
                window.location.href="mainpage.html";
            }

            else{
                console.log(objArray[0][i])
                // let moduleKey = objArray[0][i].module
                // console.log(typeof(objArray[0][i].module))
                let value = objArray[0][i].module.replace(/\s+/g,'').trim()
                window.location.href = 'display.html'+"?key="+value;
            }
            return;
        }
    }
    window.alert("Incorrect login credentials. Please try again.");
})



