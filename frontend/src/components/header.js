export default {
    SetupNavBar,
    SetupHeaderEventListeners
}

export function SetupNavBar(){
    return `
        <ul>
            <li id="navHome">Home</li>
            <li id="navCrossword">Crossword</li>
            <li id="navDrag">Drag and Drop</li>
            <li id="navWord">Wordsearch</li>
        </ul>
    `;
}

export function SetupHeaderEventListeners(){
    const btnMovies = document.getElementById('navMovies');
    btnMovies.addEventListener("click", function(){
        console.log('movie nav link is working');
    });
}