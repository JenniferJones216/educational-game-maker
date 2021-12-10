import dragAndDrop from "../components/DragAndDrop";
import * as CONSTANTS from "../components/constants";
import apiActions from "../api/api-actions";
import cookie from "./cookies"


export default {
    formatDragAndDrop,
    displayCreateDragAndDrop,
    SetupSubmitDragAndDrop,
    displayNewDragAndDrop
}

function SetupSubmitDragAndDrop(){
    const btnTextSubmit = document.getElementById("DnDSubmitText");
    btnTextSubmit.addEventListener("click", function(){
        formatDragAndDrop();
    });
}

function displayCreateDragAndDrop() {
    return `
    <div id="dndcreatetitlearea">
    <h1>Create Drag and Drop Matching Game
    </h1>
    <div>
    <label>Title: </label>
        <input type="text" name="DnDtitleInput" id="DnDtitleInput"> </div></br>
        <div>
        <label>Subheading: </label>
        <input type="text" name="DnDsubheadInput" id="DnDsubheadInput"></div>
    </div>
    
    <div class="CraftTable" id="DnDCraftTable">
        <div id="DnDPromptTextCreationArea">
       
        <textarea id="DnDAddTextBox" name="DnDAddTextBox" rows="10" cols="50"> Write your prompt text here... </textarea>
        </br>
        <button id="DnDSubmitText">Submit</button>
        </div>
         <div id="DnDTextInputDirections">
            <h3>Directions</h3>
            <p>1. Enter complete text in the box. </p><p>
            2. Put Word Bank terms inside curly brackets { }. <strong>Example:</strong> {Word Bank Item}</p><p>
            3. You can make the text box bigger or smaller by dragging the bottom right corner.</p><p>
            4. Press Submit to see your new game.</p>
         </div>
    </div>

    
    </div>
    `;
}    

function formatDragAndDrop() {
    let WordBankArray = [];
    var WordBankID = 1;
    let NewPromptText = document.getElementById("DnDAddTextBox").value;
    console.log("New Prompt Text: " + NewPromptText)
    let NewPromptTextCode = NewPromptText;
    NewPromptTextCode = "<span class='promptText'>".concat(NewPromptText);
    let n = 1;

    while (n < 100) {
        let OpenPosition = NewPromptTextCode.search("{");
        let ClosePosition = NewPromptTextCode.search("}");
        let S = OpenPosition + 1;
        let newWord = NewPromptTextCode.substring(S, ClosePosition);
        let newWordString = CONSTANTS.WordBankOpenA.concat(WordBankID, CONSTANTS.WordBankOpenB, newWord, CONSTANTS.WordBankClose);
        WordBankArray.push(newWordString);
        WordBankID++;

        NewPromptTextCode = NewPromptTextCode.replace(/{/i, "</span><span class='box'>");
        NewPromptTextCode = NewPromptTextCode.replace(/}/i, "</span><span class='promptText'>");

        OpenPosition = NewPromptTextCode.search("{");
        if (OpenPosition == -1)
            {n = 1000};
    }

    let r = 1;
    while (r < 100) {
        let x = NewPromptTextCode.search(/\n/);
        if (x == -1)
            {r = 1000};
        if (x > -1)
            {
        NewPromptTextCode = NewPromptTextCode.replace(/\n/i, "</br>")};
    }


    NewPromptTextCode = NewPromptTextCode.concat("</span>");
    WordBankArray.sort(function(a, b){return 0.5 - Math.random()});
    console.log("prompt text code: " + NewPromptTextCode);
    console.log("randomized word bank array: " + WordBankArray);

    let WordBankString = WordBankArray.join(" ");
   
    let CompleteDragAndDropPuzzle = "";
    CompleteDragAndDropPuzzle = CONSTANTS.PromptTextDivStart.concat(NewPromptTextCode, CONSTANTS.Div, CONSTANTS.WordBankDivStart, WordBankString, CONSTANTS.Div);
    
    console.log("complete drag and drop puzzle code -------- " + CompleteDragAndDropPuzzle);
    
    const titleInput = document.getElementById("DnDtitleInput");
    const subheadInput = document.getElementById("DnDsubheadInput");
    let NewTitle = titleInput.value
    let NewSubhead = subheadInput.value
    

    let requestBody = {
        Title: NewTitle,
        Subheading: NewSubhead,
        UserId: cookie.getCookie("userId"),
        PromptText: CompleteDragAndDropPuzzle,
        WordBank: NewPromptText
    };

    apiActions.postRequest(CONSTANTS.DragAndDropURL, requestBody, dragandDrop => {
            CONSTANTS.appElement.innerHTML = displayNewDragAndDrop(dragandDrop);
            dragAndDrop.SetUpDragFunctions();
    });

    
}


function displayNewDragAndDrop(dragandDrop) {
    return `
        
<h1 id="dragAndDropTitle">${dragandDrop.title}
    </h1>
    <h4 id="dragAndDropSubheading">${dragandDrop.subheading}</h4>
    <div id="dndcontainer" class="container">
    </br>
      ${dragandDrop.promptText}

    </div>
    `;
}    


   

