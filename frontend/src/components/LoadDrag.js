import * as CONSTANTS from "../components/constants";

export default {
    displayDragon
    }

function displayDragon(DragandDrop) {
    return `
    <h1 id="dragAndDropTitle">${DragandDrop.Title}
    </h1>
    <h4 id="dragAndDropSubheading">${DragandDrop.Subheading}</h4>
    <div class="container">
    </br>
        <div class="drop-targets" id="drop-targets">
        
            //insert prompt string here
            ${DragandDrop.PromptText}

            </div>
        <div class="wordbox" id="word-bank">
            <h3>Word Bank</h3>

            //insert wordbank string here
            ${DragandDrop.WordBank}
        </div>
    </div>
    `;

}