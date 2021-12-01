import header from "../components/header";

import footer from "../components/footer";

const headerElement = document.getElementById("navbar");

export default() => {
  
  
   SetupFooter();
}


function SetupFooter(){
   footerElement.innerHTML = footer.SetupFooter();
}