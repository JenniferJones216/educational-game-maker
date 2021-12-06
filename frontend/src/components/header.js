import * as CONSTANTS from "../components/constants";
import dragAndDrop from "../components/DragAndDrop";
import crossword from "../components/Crossword";

export default {
    displayNavBar,
    SetUpHeader,
    SetupHeaderEventListeners
}

function displayNavBar() {
    return `
        <ul id="navbar">
            <li id="navHome">Home</li>
            <li id="navCrossword">Crossword</li>
            <li id="navDrag">Drag and Drop</li>
            <li id="navWord">Wordsearch</li>
        </ul>
    `;
}

function SetUpHeader() {
    CONSTANTS.headerElement.innerHTML = displayNavBar();
}

function SetupHeaderEventListeners() {
    const btnHome = document.getElementById('navHome');
    btnHome.addEventListener("click", function () {
        console.log('home nav link is working');
    });
    SetUpDragAndDropLink();
    SetUpCrosswordLink();

}

function SetUpDragAndDropLink() {
    const btnDrag = document.getElementById('navDrag');
    btnDrag.addEventListener("click", function () {
        CONSTANTS.appElement.innerHTML = dragAndDrop.displayDragAndDrop();
        dragAndDrop.SetUpDragFunctions();
    })
}

function SetUpCrosswordLink() {
    const btnCrossword = document.getElementById('navCrossword');
    btnCrossword.addEventListener("click", function () {
        CONSTANTS.appElement.innerHTML = crossword.displayCrossword();
        crossword.crosswordFunctions();
    })
}