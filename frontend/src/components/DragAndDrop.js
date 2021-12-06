import * as CONSTANTS from "../components/constants";

export default {
    displayDragAndDrop,
    SetUpDragFunctions
}

const items = document.querySelectorAll('.item');
const boxes = document.querySelectorAll('.box');

function displayDragAndDrop() {
    return `
    <h1 id="dragAndDropTitle">An Issue in Health Care: Illiteracy
    </h1>
    <h4 id="dragAndDropSubheading">Directions: Click and drag the phrases to the correct spaces in the text.</h4>
    <div class="container">
    </br>
        <div class="drop-targets" id="drop-targets">
            <span class='promptText'>
            According to some estimates, well over half of the people in the world are functionally illiterate. This means that they are unable to perform everyday tasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not</span>
            <span class='box'>able to read</span>
            <span class='promptText'>directions on medicine bottles or packages. Imagine</span>
            <span class='box'>being</span>
            <span class='promptText'>a parent with a sick child and being unable</span>
            <span class='box'>to read</span>
            <span class='promptText'> the directions on a medicine bottle. We all know that it is important for medical directions</span>
            <span class='box'>to be understood</span>
            <span class='promptText'>clearly. One solution is pictures. Many medical professionals are working today</span>
            <span class='box'>to solve</span>
            <span class='promptText'>this problem by</span>
            <span class='box'>using</span>
            <span class='promptText'>pictures to convey health-care information.</span>
            </div>
        <div class="wordbox" id="word-bank">
            <h3>Word Bank</h3>
            <div class='item' id='1' draggable='true'>
                to be understood
            </div>
            <div class='item' id='2' draggable='true'>
                able to read
            </div>
            <div class='item' id='3' draggable='true'>
               to solve
            </div>
            <div class='item' id='4' draggable='true'>
                using
            </div>
            <div class='item' id='5' draggable='true'>
                to read
            </div>
            <div class='item' id='6' draggable='true'>
                being
            </div>
        </div>
    </div>
    `;

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
