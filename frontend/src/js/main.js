import header from "../components/header";
import * as CONSTANTS from "../components/constants";
import footer from "../components/footer";

const headerElement = document.getElementById("navbar");

export default() => {
   SetupHeader();
   SetupHome();
   SetupFooter();
}

function SetupHeader(){
   headerElement.innerHTML = header.SetupNavBar();
   header.SetupHeaderEventListeners();
}

function SetupHome(){
   // CONSTANTS.Title.innerText = "Welcome";
   // CONSTANTS.Content.innerHTML = "<p>Fink Ployd's Music Collection & Review Site</p>";
}

function SetupFooter(){
   footerElement.innerHTML = footer.SetupFooter();
}