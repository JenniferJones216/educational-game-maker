import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";

export default {
    DisplaySongs
}

export function DisplaySongs(data) {
    return `<ol>
    ${data.map(song => {
        return `<li class="songsList">${song.title}</li>`;
    }).join('')}
    </ol>`
}