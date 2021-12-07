import header from "../components/header";
import * as CONSTANTS from "../components/constants";
import dragAndDrop from "../components/DragAndDrop";


// import footer from "../components/footer";

export default () => {
   SetUp();

}

function SetUpHome() {
   CONSTANTS.appElement.innerHTML = `
      <h1 id="homeHeader">Welcome to the Educational Game Maker!</h1>
   `;
}

function SetUp() {
   header.SetUpHeader();
   header.SetupHeaderEventListeners();
   SetUpHome();
   // SetupFooter();
}



// function SetupFooter(){
//    footerElement.innerHTML = footer.SetupFooter();
// }