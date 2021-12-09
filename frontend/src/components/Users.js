import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import sword from "./Sword";


export default {
    DisplayUsers,
    SetUpSwordStart
};

export function DisplayUsers(data) {
 
    return `
 
    
    <ul>
    ${data.map(user => {
        return `<li class="usertList"><h3>${user.name}</h3>
       <p> ${user.username} </p>  
       <button class="playSword" id = "sw${user.id}"> play wordserch </button>
        
      
        </li>`;
    }).join('')}
    </ul>`





}
   

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