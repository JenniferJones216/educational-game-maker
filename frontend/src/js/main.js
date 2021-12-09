import header from "../components/header";
import * as CONSTANTS from "../components/constants";
import dragAndDrop from "../components/DragAndDrop";
import Home from "../components/Home";
import users from "../components/Users" 
import footer from "../components/footer";

export default () => {
   SetUp();

}

function SetUpHome() {
   CONSTANTS.appElement.innerHTML = Home.displayHome();
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