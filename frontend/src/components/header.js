import * as CONSTANTS from "../components/constants";
import dragAndDrop from "../components/DragAndDrop";
import crossword from "../components/Crossword";
import allCrosswords from "../components/crosswords";
import loadDrag from "./LoadDrag";
import apiActions from "../api/api-actions";
import sword from "../components/Sword";
import Home from "../components/Home";

export default {
    displayNavBar,
    SetUpHeader,
    SetupHeaderEventListeners,
    SetUpSwordLink,
}

function displayNavBar() {
    return `
        <ul id="navbar">
            <li id="navHome">Home</li>
            <li id="navCrossword">Crossword</li>
            <li id="navDrag">Drag and Drop</li>
            <li id="navSWord">Wordsearch</li>
        </ul>
    `;
}

function SetUpHeader() {
    CONSTANTS.headerElement.innerHTML = displayNavBar();
}

function SetupHeaderEventListeners() {
    const btnHome = document.getElementById('navHome');
    btnHome.addEventListener("click", function () {
        CONSTANTS.appElement.innerHTML = Home.displayHome();
    });
    SetUpDragAndDropLink();
    DisplayCrosswords();
    SetUpSwordLink();

}

// function SetUpDragAndDropLink() {
//     const btnDrag = document.getElementById('navDrag');
//     btnDrag.addEventListener("click", function () {
//         CONSTANTS.appElement.innerHTML = dragAndDrop.displayDragAndDrop();
//         dragAndDrop.SetUpDragFunctions();
//     })
// }

function SetUpDragAndDropLink() {
    const btnDrag = document.getElementById('navDrag');
    btnDrag.addEventListener("click", function (evt) {
        apiActions.getRequest(CONSTANTS.DragAndDropURL, data =>{
            CONSTANTS.appElement.innerHTML = loadDrag.displayDragon(data);
            dragAndDrop.SetUpDragFunctions();
        });
        
    });
}

//loop through all crosswords and set up this link for each Id//

// function SetUpCrosswordLink() {
//     const btnCrossword = document.getElementById('navCrossword');
//     btnCrossword.addEventListener("click", function () {
//             CONSTANTS.appElement.innerHTML = crossword.displayCrossword();
//             crossword.crosswordFunctions(1);
//     })
// }

function DisplayCrosswords() {
    const btnCrossword = document.getElementById('navCrossword');
    btnCrossword.addEventListener("click", function () {
        apiActions.getRequest(CONSTANTS.CrosswordURL, data => {
            console.log(data);
            CONSTANTS.appElement.innerHTML = allCrosswords.displayAllCrosswords(data);
        })
    })
    }


function SetUpSwordLink() {
    const btnSword = document.getElementById('navSWord');
    btnSword.addEventListener("click", function () {
        CONSTANTS.appElement.innerHTML = sword.displaySword();
        sword.SwordFunctions();
    })
}