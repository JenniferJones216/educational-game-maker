export default {
    displayNavBar,
    SetUpHeader,
    SetupHeaderEventListeners
}

function displayNavBar(){
    return `
        <ul>
            <li id="navHome">Home</li>
            <li id="navCrossword">Crossword</li>
            <li id="navDrag">Drag and Drop</li>
            <li id="navWord">Wordsearch</li>
        </ul>
    `;
}

function SetUpHeader(){
    const headerElement = document.getElementById('header');
    headerElement.innerHTML = displayNavBar();
}

function SetupHeaderEventListeners(){
    const btnHome = document.getElementById('navHome');
    btnHome.addEventListener("click", function(){
        console.log('home nav link is working');
    });
    const btnDrag = document.getElementById('navDrag');
    btnDrag.addEventListener("click", function(){
        console.log('Drag btn working');
    })
}