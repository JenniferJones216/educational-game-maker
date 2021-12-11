import * as CONSTANTS from "./constants";
import crossword from "./Crossword";
import apiActions from  "../api/api-actions";
import cookie from "./cookies"

export default{
    displayAllCrosswords,
    SetUpCrosswordLinks,
    SetupAddCrossword,
    SetUpCrosswordDeleteBtn
}

export function displayAllCrosswords(crosswords){
    if(crosswords.map == undefined){
        crosswords.map = [];
    }
    return `
        <h1 id="allCrosswords">Choose a Crossword from the List Below: </h1>
        <h4 id="addCrosswordTitle"><button id="addCrossword">Add Your Own</button></h4>
        <ol>
            ${crosswords.map(crossword =>{
                return `
                <li>
                    <h4>
                        <span id="${crossword.id}" class="crosswordTitle">${crossword.title}</span>
                        <button id="${crossword.id}" class="btnDeleteCrossword">Delete</button>
                    </h4>
                </li>
                `;
            }).join('')}
         </ol>
    `;
}

export function SetUpCrosswordLinks(){
    let crosswordLinks = document.querySelectorAll('.crosswordTitle');
    crosswordLinks.forEach(crosswordLink => {
        crosswordLink.addEventListener("click", function() {
            console.log("title clicked")
            let crosswordId = crosswordLink.id;
            CONSTANTS.appElement.innerHTML = crossword.displayCrossword(crosswordId);
            crossword.crosswordFunctions(crosswordId);
            });
        });
    }

    
export function SetupAddCrossword(){
    const btnAddCrossword = document.getElementById("addCrossword");
    btnAddCrossword.addEventListener("click", function (){
        console.log('add crossword functionality goes here...');
                
        CONSTANTS.appElement.innerHTML = 
        `
        <form class='addOwner'>
            <label><strong>Crossword Title: </strong></label>
            <input type='text' id='crosswordTitle' placeholder='Crossword Title'/>
            <h3 id=addCrosswordClues">Crossword Questions: </h3> 
            <span> Write a minimum of 10 answers and clues. Of the ones you create, 25 will be randomly chosen for the puzzle.</span></br><span>*You must be logged in to your profile to create a new game.*</span></br></br>
            <div id="placeholders">
                <div class="line">
                    <input class="word" type="text" placeholder="Answer"/>
                    <span class="lineNum"></span>
                    <input class="clue" placeholder="Clue"/>
                </div>
            </div>
            <button type="button" id="addClueButton">Add Clue</button>
            <button type="button" id='btnCreateCrossword'>Create Crossword</button>
            
        </form>
        `;
        SetupAddClueButton();
        SetUpCreateCrossword();
        });
    }
    
    export function SetUpCreateCrossword(){
        const btnCreateCrossword = document.getElementById("btnCreateCrossword");
        btnCreateCrossword.addEventListener("click", async function(){
            console.log("creating...");

        const clues = document.getElementsByClassName('clue');
        const answers = document.getElementsByClassName('word');

        let crosswordQs = [];
        for(let i=0; i < clues.length; i++){
            console.log(clues[i].value);
            crosswordQs.push({ Id: 0, Clue:clues[i].value, Answer: answers[i].value });
               
        };

        const newCrossword = {
            Title: document.getElementById("crosswordTitle").value,
            UserId: cookie.getCookie("userId"),
            crosswordQuestions : crosswordQs
        };

        apiActions.postRequest(CONSTANTS.CrosswordURL, newCrossword, data => {
            CONSTANTS.appElement.innerHTML = displayAllCrosswords(data);
            SetUpCrosswordLinks();
            SetupAddCrossword();
            SetUpCrosswordDeleteBtn();

        });
    });
    }

  

function SetupAddClueButton(){
    const addClueButton = document.getElementById("addClueButton");
    const placeholderDiv = document.getElementById("placeholders");
    addClueButton.addEventListener("click", function(){
        let div = document.createElement("div");
        div.classList.add("line");
        let placeholderTemplate = `
         <input class="word" type="text" placeholder="Answer"/>
         <span class="lineNum"></span>
         <input class="clue" placeholder="Clue"/>
     `;
     div.innerHTML = placeholderTemplate;
     //might need to update lineNum property
     placeholderDiv.appendChild(div);
    });
}

function SetUpCrosswordDeleteBtn(){
    let crosswordDeleteBtn = document.querySelectorAll(".btnDeleteCrossword");

    crosswordDeleteBtn.forEach(btn => {
        btn.addEventListener("click", function(){
            let id = btn.id;

            apiActions.deleteRequest(CONSTANTS.CrosswordURL + "/", id, data => {
                CONSTANTS.appElement.innerHTML = displayAllCrosswords(data);
                //three calls
                SetUpCrosswordLinks();
                SetupAddCrossword();
                SetUpCrosswordDeleteBtn();
            });
         
        });
    });
}