import header from "../components/header";

const appElement = document.getElementById('app');

// import footer from "../components/footer";

export default() => {
   SetUp();

}

function SetUpHome(){
   appElement.innerHTML = `
      <h1>Welcome to the Educational Game Maker!</h1>
   `;
}

function SetUp(){
   header.SetUpHeader();
   header.SetupHeaderEventListeners();
   SetUpHome();
    // SetupFooter();
}

// function SetupFooter(){
//    footerElement.innerHTML = footer.SetupFooter();
// }