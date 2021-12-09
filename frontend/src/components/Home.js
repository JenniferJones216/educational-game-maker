import * as CONSTANTS from "../components/constants";

export default {
    displayHome
}

function displayHome(){
    return `
    <h1 id="title">Educational Game Maker</h1>
    <div class="container">
    <h4 id="subHead">Directions</h4>
          <div id="text">
            <p>Remember have fun !!</p>
            <p>Choose whatever game through navbar</p>
            <p>Then either create a game or play it</p>
            <p>It's all up to you</p>
          </div>
    </div>
    `;
}
