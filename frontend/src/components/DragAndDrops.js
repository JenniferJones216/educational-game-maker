import * as CONSTANTS from "../components/constants";
import createDragAndDrop from "./CreateDragAndDrop";
import dragAndDrop from "./DragAndDrop";
import loadDrag from "./LoadDrag";
import apiActions from "../api/api-actions";

export default {
    displayAllDragAndDrops,
    setupCreateDragAndDrop,
    SetupDragAndDropLinks,
    SetUpDragAndDropDeleteBtn
}

function displayAllDragAndDrops(dragandDrops) { 
    if(dragandDrops.map == undefined){
        dragandDrops.map = [];
    }
    return `
         <button id="DnDCreatGameButton">Create Drag and Drop Game</button>
        <ol>
            ${dragandDrops.map(dragandDrop => {
                return `
                    <li>
                        <h4>
                            <span id="${dragandDrop.id}" class="DnDTitle">${dragandDrop.title}</span>
                            <button id="${dragandDrop.id}" class="DnD_delete">Delete</button>
                        </h4>
                    </li>
                `;
            }).join('')}
        </ol>
    `;

}

function setupCreateDragAndDrop() {
    const btnCreateDragAndDrop = document.getElementById("DnDCreatGameButton");
    btnCreateDragAndDrop.addEventListener("click", function() {CONSTANTS.appElement.innerHTML = createDragAndDrop.displayCreateDragAndDrop();
    createDragAndDrop.SetupSubmitDragAndDrop();
    });

}

function SetupDragAndDropLinks(){

    let dragLinks = document.querySelectorAll(".DnDTitle");
    dragLinks.forEach(dragLink => {
        
        dragLink.addEventListener("click", function(evt){
            
            // Owner Id
            let draganddropId = dragLink.id;
            
            //console.log(ownerId);
            
            //API Request
            apiActions.getRequest(CONSTANTS.DragAndDropURL + "/" + draganddropId, data =>{
                console.log(data);
                CONSTANTS.appElement.innerHTML = loadDrag.displayDragAndDrop(data);
                dragAndDrop.SetUpDragFunctions();
                // Owner.SetupAddTodoToOwner();
                // Owner.SetupEditButton();
           });

        //    CONSTANTS.appElement.innerHTML = createDragAndDrop.displayNewDragAndDrop(draganddropId);
        //     dragAndDrop.SetUpDragFunctions();
        });
    });

}

function SetUpDragAndDropDeleteBtn(){
    let btnDragDelete = document.querySelectorAll(".DnD_delete");
    btnDragDelete.forEach(btn => {
        btn.addEventListener("click", function(){
            let id = btn.id;
            apiActions.deleteRequest(CONSTANTS.DragAndDropURL + "/", id, data => {
                CONSTANTS.appElement.innerHTML = displayAllDragAndDrops(data);  
                setupCreateDragAndDrop();
                SetupDragAndDropLinks();
                SetUpDragAndDropDeleteBtn();
            });
        });
    });
}
