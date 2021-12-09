import header from "../components/header";
import * as CONSTANTS from "../components/constants";
import dragAndDrop from "../components/DragAndDrop";

import users from "../components/Users" 
import footer from "../components/footer";

export default () => {
   SetUp();

}

function SetUpHome() {
   CONSTANTS.appElement.innerHTML = ``;
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