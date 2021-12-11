export default {
    SetUpDragFunctions
}



function SetUpDragFunctions() {

    // select the item element
    const items = document.querySelectorAll('.item');
    // attach the dragstart event handler
    items.forEach(item => {
        item.addEventListener('dragstart', dragStart)
    });

    // handle the dragstart
    function dragStart(e) {
        console.log('drag starts...');
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    const boxes = document.querySelectorAll('.box');
    // function targetSetup() {
    boxes.forEach(box => {
        box.addEventListener('dragenter', dragEnter)
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
        box.classList.add('HideFont');
    });

    function dragEnter(ev) {
        ev.preventDefault();
        ev.target.classList.add('drag-over');
    }

    function dragOver(ev) {
        ev.preventDefault();
        ev.target.classList.add('drag-over');
    }

    function dragLeave(ev) {
        ev.target.classList.remove('drag-over');
    }
    function drop(ev) {
        ev.target.classList.remove('drag-over');
        // get the draggable element
        const id = ev.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        if (ev.target.innerText == draggable.innerText) {
            ev.target.innerText = "";
            ev.target.classList.remove('HideFont');
            // add it to the drop target
            ev.target.appendChild(draggable);
        }
        else {
            ev.target.classList.add('wrong-answer')
            setTimeout(() => {
                ev.target.classList.remove('wrong-answer');
            }, 500);
        }
    }

}
