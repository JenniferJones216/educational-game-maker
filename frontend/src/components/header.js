import * as CONSTANTS from "../components/constants";
import allCrosswords from "../components/crosswords";
import apiActions from "../api/api-actions";
import sword from "../components/Sword";
import Home from "../components/Home";
import Users from "./Users";
import dragAndDrops from "./DragAndDrops";

export default {
    displayNavBar,
    SetUpHeader,
    SetupHeaderEventListeners,
    SetUpSwordLink,
    DisplayCrosswords,
    SetupUser

}

function displayNavBar() {
    return `
        <ul id="navbar">
            <li id="navHome">Home</li>
            <li id="navUser">Users</li>
            <li id="navCrossword">Crossword</li>
            <li id="navDrag">Drag and Drop</li>
            <li id="navSWord">Wordsearch</li>
        </ul>
    `;
}




function SetupUser(){
    const buttonUser = document.getElementById("navUser");
   
    buttonUser.addEventListener(
      "click", () => {
      apiActions.getRequest(CONSTANTS.userURL, data => {
       
       
        CONSTANTS.appElement.innerHTML = Users.DisplayUsers(data); 
        Users.SetUpSwordStart();

    })}
    );   
}



function SetUpHeader() {
    CONSTANTS.headerElement.innerHTML = displayNavBar();
}

function SetupHeaderEventListeners() {
    const btnHome = document.getElementById('navHome');
    btnHome.addEventListener("click", function () {
        CONSTANTS.appElement.innerHTML = Home.displayHome();
    });
    DisplayDragAndDrops();
    DisplayCrosswords();
    SetUpSwordLink();
    SetupUser();



}

function DisplayDragAndDrops() {
    const btnDrag = document.getElementById('navDrag');
    btnDrag.addEventListener("click", function () {
        apiActions.getRequest(CONSTANTS.DragAndDropURL, data => {
            CONSTANTS.appElement.innerHTML = dragAndDrops.displayAllDragAndDrops(data);  
            dragAndDrops.setupCreateDragAndDrop();
            dragAndDrops.SetupDragAndDropLinks();
            dragAndDrops.SetUpDragAndDropDeleteBtn();
        });
        
         //set up delete
    });
}

function DisplayCrosswords() {
    const btnCrossword = document.getElementById('navCrossword');
    btnCrossword.addEventListener("click", function () {
        apiActions.getRequest(CONSTANTS.CrosswordURL, data => {
            console.log(data);
            CONSTANTS.appElement.innerHTML = allCrosswords.displayAllCrosswords(data);
            allCrosswords.SetUpCrosswordLinks();
            allCrosswords.SetupAddCrossword();
            allCrosswords.SetUpCrosswordDeleteBtn();
        })
    })
}


function SetUpSwordLink() {
    const btnSword = document.getElementById('navSWord');
    btnSword.addEventListener("click", function () {
        CONSTANTS.appElement.innerHTML = sword.displaySword();
        sword.SwordGameCreate();
    })
}