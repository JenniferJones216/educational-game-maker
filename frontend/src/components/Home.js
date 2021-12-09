import * as CONSTANTS from "../components/constants";

export default {
    displayHome
}

function displayHome(){
    return `
    <h1 id="title">Educational Game Maker</h1>
    <div class="container">
    <h4 id="subHead">Directions</h4>
          <ol id="text">
            <li>Remember have fun !!</li>
            <li>Choose whatever game through navbar</li>
            <li>Then either create or play it</li>
            <li>It's all up to you</li>
          </ol>
        </div>
    </div>
    `;
}
