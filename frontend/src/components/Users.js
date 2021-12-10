import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import sword from "./Sword";
import crossword from "./Crossword"
import loadDrag from "./LoadDrag"
import dragAndDrop from "./DragAndDrop"

export default {
    DisplayUsers,
    SetUpSwordStart,
    SetupUserLinks,
    displayUserProfile,
    setupUserProfileLinks
};

export function DisplayUsers(data) {
    return `
    <div id="userList">
    ${data.map(user => {
        return `
        <div id="${user.id}">
          <h3>${user.username}</h3>
          <button class="userGamesBtn" id = "user-${user.id}">User Games</button> 
          <button class="playSword" id = "sw${user.id}"> Play Wordsearch </button> 
          </div>  
        `;
    }).join('')}
    </div>`
}

export function SetupUserLinks(){
let userGamesBtn = document.querySelectorAll('.userGamesBtn');
userGamesBtn.forEach(btn =>{
  btn.addEventListener("click", function(){
    let currentId = parseInt(btn.id.replace("user-", ""));
    console.log(currentId + "THIS IS ID");
    displayUserProfile(currentId);

})

})
  //functionality for setting up and displaying each user's games
 // SetUpSwordStart();
//  dispayUserProfile();
}

export function displayUserProfile(id){
  apiActions.getRequest(CONSTANTS.userURL + "/" + id, data =>{
    console.log("data info " +data);
    console.log(data.name, "  ", data.username, " ", data.crosswords);
    
    CONSTANTS.appElement.innerHTML = `
  <h1>${data.username}'s Games</h1>
  <h3>Crosswords</h3>
  ${data.crosswords.map(cw => {
      return `<div>
          <span>
          ${cw.title}
          </span>
          <button class="crossword" id="cw-${cw.id}">Play!</button>
      </div>`
  }).join('')}
  <h3>Drag and Drops</h3>
  ${data.dragandDrops.map(dnd => {
       return `<div>
          <span>
          ${dnd.title}
          </span>
          <button class="dragAndDrop" id="dnd-${dnd.id}">Play!</button>
      </div>`
  }).join('')}
  `;
  setupUserProfileLinks();
});
}

export function setupUserProfileLinks(){
  
  let cws = Array.from(document.getElementsByClassName("crossword"));
  let dnds = Array.from(document.getElementsByClassName("dragAndDrop"));
  cws.forEach(cw => {
    cw.addEventListener("click", function(){
      console.log("crossword btn clicked!")
        let id = parseInt(cw.id.replace("cw-",""));
        CONSTANTS.appElement.innerHTML = crossword.displayCrossword(id);
        crossword.crosswordFunctions(id);
    });
});
dnds.forEach(dnd => {
    dnd.addEventListener("click", function(){
      console.log("DND btn clicked!")
        let id = parseInt(dnd.id.replace("dnd-",""));
        apiActions.getRequest(CONSTANTS.DragAndDropURL + "/" + id, data =>{
            console.log(data);
            CONSTANTS.appElement.innerHTML = loadDrag.displayDragAndDrop(data);
            dragAndDrop.SetUpDragFunctions();
        });
    });
});
}




//might not need
export function SetUpSwordStart() {
   
    let playSword = document.querySelectorAll(".playSword");
   
    playSword.forEach((button) => {
      button.addEventListener("click", () => {
        let currentId = parseInt(button.id.replace("sw", ""));
        console.log(" Id for wordsearch    "+ currentId);
        CONSTANTS.appElement.innerHTML= sword.displaySword();
        sword.SwordFunctions(currentId);

     


      });
    });
  }