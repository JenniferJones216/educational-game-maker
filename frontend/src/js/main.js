import header from "../components/header";
import * as CONSTANTS from "../components/constants";
import dragAndDrop from "../components/DragAndDrop";

import users from "../components/Users" 
import footer from "../components/footer";

export default () => {
   SetUp();

}

function SetUpHome() {
   CONSTANTS.appElement.innerHTML = `
      <h1 id="homeHeader">Educational Game Maker</h1>
      <h3 id="subHead">Directions:</h3>
      <div class="home">
            <ol>
              <li>Remember have fun !!</li>
              <li>Choose whatever game through navbar</li>
              <li></li>
            </ol>
          </div>
      </div>
   `;
}

function SetUp() {
   header.SetUpHeader();
   header.SetupHeaderEventListeners();
   SetUpHome();
   SetupFooter();
   header.SetupUser();
}



function SetupFooter(){
   CONSTANTS.Footer.innerHTML = footer.SetupFooter();
}