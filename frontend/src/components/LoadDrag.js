
export default {
    displayDragAndDrop,
    
    }



function displayDragAndDrop(dragandDrop) {
    return `
        
<h1 id="dragAndDropTitle">${dragandDrop.title}
    </h1>
    <h4 id="dragAndDropSubheading">${dragandDrop.subheading}</h4>
     <p>Click and drag the Word Bank terms to the spaces where they belong in the text.</p>
    <div id="dndcontainer" class="container">
    </br>
      ${dragandDrop.promptText}

    </div>
    `;

}    
