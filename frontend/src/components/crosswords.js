import * as CONSTANTS from "./constants";
import crossword from "./Crossword";
import apiActions from  "../api/api-actions";

export default{
    displayAllCrosswords,
    SetUpCrosswordLinks
}

export function displayAllCrosswords(crosswords){
    return `
        <h1 id="allCrosswords">Choose a Crossword from the List Below: </h1>
        <h2 id="addCrosswordTitle">Or <button id="addCrossword">Add Your Own</button></h2>
        <ol>
            ${crosswords.map(crossword =>{
                return `
                <li>
                    <h4>
                        <span class="crosswordTitle">${crossword.title}</span>
                        <button id="${crossword.id}" class="btnPlayCrossword">Play</button>
                    </h4>
                </li>
                `;
            }).join('')}
         </ol>
    `;
}

export function SetUpCrosswordLinks(){
    // let crosswordLinks = document.querySelectorAll('.crosswordTitle');
    // crosswordLinks.forEach(crosswordLink => {
        // crosswordLink.addEventListener("click", function() {
            let btnPlayCrossword = document.getElementbyId();
            btnPlayCrossword.addEventListener("click", function(){
            console.log("button clicked!");
            })            
            // CONSTANTS.appElement.innerHTML = crossword.displayCrossword(crosswordId);
            //  crossword.crosswordFunctions(crosswordId);
        }