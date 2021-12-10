import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import sword from "./Sword";


export default {
    DisplayUsers,
    SetUpSwordStart,
    SetupUserLinks
};

export function DisplayUsers(data) {
 
    return `
    <div id="userList">
    ${data.map(user => {
        return `
        <div id="${user.id}">
          <h3>${user.username}</h3>
     <button class="playSword" id = "sw${user.id}"> Play Wordsearch </button> 
          </div>  
        `;
      
    }).join('')}
    </div>`
}
 
export function SetupUserLinks(){
  //functionality for setting up and displaying each user's games
 // SetUpSwordStart();

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