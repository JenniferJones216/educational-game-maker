import * as CONSTANTS from "./constants"
import apiActions from "../api/api-actions"
import cookies from "./cookies";
import main from '../js/main';
import crossword from "./Crossword"

const url = CONSTANTS.userURL + "?u={0}&password={1}";

export default {
    displayLogin,
    displayProfile,
    setupLogin,
    setupProfile
}

export function displayLogin(){
    return     `
    <form id="login">
        <input type="text" class="username" id="username" placeholder="Username"/>
        <input type="password" class="password" id="password" placeholder="Password"/>
    </form>
    <button value="submit" id='loginBtn'>Login</button>
    <button id="registerBtn">Register</button>
`;
}

export function setupLogin(){
    let login = document.getElementById("loginBtn");
    login.addEventListener("click", function(){
        let u = document.getElementById("username").value
        let p = document.getElementById("password").value
        apiActions.getRequest(CONSTANTS.userURL, users =>{
            users.forEach(user => {
            if (user.username === u && user.password === p){
                console.log(user);
                cookies.setCookie("userId", user.id, 7);
                main();
            }
        });
    });
});
    let register = document.getElementById("registerBtn");
    register.addEventListener("click", function(){
        CONSTANTS.appElement.innerHTML = displayRegister();
        setupRegister();
    });
}

export function displayRegister(){
    return     `
    <form id="login">
        <input type="text" class="name" id="name" placeholder="Name"/>
        <input type="text" class="username" id="username" placeholder="Username"/>
        <input type="password" class="password" id="password" placeholder="Password"/>
    </form>
    <button id="registerBtn">Register</button>
    <button value="submit" id='loginBtn'>Back to Login</button>
    
`;
}

export function setupRegister(){
    let login = document.getElementById("loginBtn");
    login.addEventListener("click", function(){
        CONSTANTS.appElement.innerHTML = displayLogin();
        setupLogin();
    });
    let register = document.getElementById("registerBtn");
    register.addEventListener("click", function(){
        let n = document.getElementById("name").value
        let u = document.getElementById("username").value
        let p = document.getElementById("password").value

        let templateUser = {
            Id: 0,
            Name: n,
            Username: u,
            Password: p
        }
        let isUnique = true;
        apiActions.getRequest(CONSTANTS.userURL, users =>{
            users.forEach(user => {
            if (user.username === u){
                isUnique = false;
            }
        });
        if(isUnique){
            apiActions.postRequest(CONSTANTS.userURL, templateUser, user => {
                console.log(user);
                cookies.setCookie("userId", user.id, 7);
                main();
            });
        } else {
            // display error message
        }
    });
});
}

export async function displayProfile(){
    let userId = parseInt(cookies.getCookie("userId"));
    let user = await fetch(CONSTANTS.userURL+`/${userId}`)
    .then(response => response.json())
    .catch(err => console.log(err));
    console.log(user);
    return     `
    <h1>Welcome ${user.name}!</h1>
    <span>(aka: ${user.username})</span>
    <h3>Your Crosswords</h3>
    ${user.crosswords.map(cw => {
        return `<div>
            <span>
            ${cw.title}
            </span>
            <button class="crossword" id="cw-${cw.id}">Play!</button>
        </div>`
    }).join('')}
    <button id="logoutBtn">Logout</button>
`;
}

export function setupProfile(){
    let logout = document.getElementById("logoutBtn");
    logout.addEventListener("click", function(){
        cookies.deleteCookie("userId");
        main();
    });

    let cws = Array.from(document.getElementsByClassName("crossword"));
    cws.forEach(cw => {
        cw.addEventListener("click", function(){
            let id = parseInt(cw.id.replace("cw-",""));
            CONSTANTS.appElement.innerHTML = crossword.displayCrossword(id);
            crossword.crosswordFunctions(id);
        });
    });
}