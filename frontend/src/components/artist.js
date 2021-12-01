import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import Artists from "./Artists";

 
export default {
    DisplayArtist,
    EditArtist,
    SetupSaveButton,
}
 
function DisplayArtist(artist){
    console.log(artist);
    if (artist.albums == null) {
        artist.albums = [];
    }
       
    return `
        <div class="details">
        <h3>${artist.name}</h3>
        <button name="btnEditAlbum" id = "artistEdit${
          artist.id
        }" class ="artist_edit">Edit Artist</button>

        <button name="btnDeleteAlbum" id = "artistDelete${
          artist.id
        }" class = "artist_delete">Delete Artist</button>
        <h4>Albums</h4>
        <ul>
            ${artist.albums
              .map((album) => {
                return `
                    <li>
                        ${album.title}
                    </li>
                `;
              })
              .join("")}
        </ul>
        </div>
    `;
}
 
export function EditArtist(artist){
    return `
        <input type="hidden" value="${artist.id}" id="Artist_id" />
        <label>Change artist name</label>
        <input type="text" value="${artist.name}" id="Artist_name" />
        <button id = "btnSaveArtist">Save</button>
    `;
}
 
export function SetupSaveButton(){
    let btnSave = document.getElementById("btnSaveArtist");
    btnSave.addEventListener("click", function(){
        let ArtistId = document.getElementById("Artist_id").value;
        let ArtistName = document.getElementById("Artist_name").value;
 
        const editArtist = {
            Id: ArtistId,
            Name: ArtistName
        }
 
        apiActions.putRequest(CONSTANTS.artistURL, ArtistId, editArtist, data => {
            console.log(data);
            CONSTANTS.Content.innerHTML = DisplayArtist(data);
            Artists.SetupEditButton();
            Artists.SetupDeleteButton();
        });
    });
}
 
export function SetupEditButton(){
    let btnEdit = document.getElementById("btnEditArtist");
    btnEdit.addEventListener("click", function(){
        CONSTANTS.Content.innerHTML = EditArtist(Artist);
        SetupSaveButton();
    });
}
