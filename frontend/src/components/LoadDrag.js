
export default {
    displayDragAndDrop,
    
    }

// function displayDragon(DragandDrop) {
//     return `
//     <h1 id="dragAndDropTitle">${DragandDrop.title}
//     </h1>
//     <h4 id="dragAndDropSubheading">${DragandDrop.subheading}</h4>
//     <div class="container">
//     </br>
//         <div class="drop-targets" id="drop-targets">
        
//             ${DragandDrop.promptText}
//             </div>
//         <div class="wordbox" id="word-bank">
//             <h3>Word Bank</h3>
//             ${DragandDrop.wordBank}
//         </div>
//         </br>
        
//     </div>
//     `;

// }

function displayDragAndDrop(dragandDrop) {
    return `
        
<h1 id="dragAndDropTitle">${dragandDrop.title}
    </h1>
    <h4 id="dragAndDropSubheading">${dragandDrop.subheading}</h4>
    <div class="container">
    </br>
      ${dragandDrop.promptText}

    </div>
    `;
}    
