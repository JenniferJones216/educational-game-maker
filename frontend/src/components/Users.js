import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import sword from "./Sword";
import crossword from "./Crossword"
import loadDrag from "./LoadDrag"
import dragAndDrop from "./DragAndDrop"

export default {
    DisplayUsers,
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
    displayUserProfile(currentId);

})
})
}

export function displayUserProfile(id){
  if(sword.map == undefined){
    sword.map = [];
  }
  apiActions.getRequest(CONSTANTS.userURL + "/" + id, data =>{
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
  <h3>Wordsearches</h3>
  `;
  setupUserProfileLinks();
});
}

export function setupUserProfileLinks(){
  
  let cws = Array.from(document.getElementsByClassName("crossword"));
  let dnds = Array.from(document.getElementsByClassName("dragAndDrop"));
  let wss =  Array.from(document.getElementsByClassName("playSword"));

  cws.forEach(cw => {
    cw.addEventListener("click", function(){
        let id = parseInt(cw.id.replace("cw-",""));
        CONSTANTS.appElement.innerHTML = crossword.displayCrossword(id);
        crossword.crosswordFunctions(id);
    });
});
dnds.forEach(dnd => {
    dnd.addEventListener("click", function(){
        let id = parseInt(dnd.id.replace("dnd-",""));
        apiActions.getRequest(CONSTANTS.DragAndDropURL + "/" + id, data =>{
            console.log(data);
            CONSTANTS.appElement.innerHTML = loadDrag.displayDragAndDrop(data);
            dragAndDrop.SetUpDragFunctions();
        });
    });
    wss.forEach(ws => {
      console.log(wss);
      ws.addEventListener("click", function(){
        console.log("WS btn clicked!")
          let id = parseInt(ws.id.replace("ws-",""));
              CONSTANTS.appElement.innerHTML = sword.displaySword();
              sword.SwordFunctions(id);          
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