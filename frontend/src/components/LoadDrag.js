
export default {
    displayDragAndDrop,
    
    }



function displayDragAndDrop(dragandDrop) {
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
