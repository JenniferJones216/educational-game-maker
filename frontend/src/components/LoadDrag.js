import * as CONSTANTS from "../components/constants";

export default {
    displayDragon
    }

function displayDragon(DragandDrop) {
    return `
    <h1 id="dragAndDropTitle">${DragandDrop.title}
    </h1>
    <h4 id="dragAndDropSubheading">${DragandDrop.subheading}</h4>
    <div class="container">
    </br>
        <div class="drop-targets" id="drop-targets">
        
            ${DragandDrop.promptText}
            </div>
        <div class="wordbox" id="word-bank">
            <h3>Word Bank</h3>
            ${DragandDrop.wordBank}
        </div>
    </div>
    `;

}