import * as CONSTANTS from "../components/constants";

export default {
    displayHome
}

function displayHome(){
    return `
    <input type="text" onclick="getUser()">UserName</input>
    <input type="text" onclick="getPassword()">Password</input>
    <h1>Educational Game Maker</h1>
    <div class="container">
    <h3 id="subHead">Directions:</h3>
          <ol>
            <li>Remember have fun !!</li>
            <li>Choose whatever game through navbar</li>
            <li></li>
          </ol>
        </div>
    </div>
    `;
}
