import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import artist from "./artist";


export default {
  DisplayArtists,
  AddArtist,
   SetupDeleteButton,
   SetupEditButton,
  SetupDetailButton,
};

export function DisplayArtists(data) {
 
    return `
 
    <section class="addArtist">
    <label><strong>Name:</strong></label>
    <input type='text' id='ArtistName' placeholder='Enter a name ' />
 
    <button id='btnAddArtist'>Add Artist</button>
    </section>
    <ol>
    ${data.map(artist => {
        return `<li class="artistList"><h3>${artist.name}</h3>
            <button name="btnEditArtist" id = "artistEdit${artist.id}" class ="artist_edit">Edit</button>
            <input type="text" id = "artistsId${artist.id}" style ="display:none" value = ${artist.id}>
            <button name="btnDeleteArtist" id = "artistDelete${artist.id}" class = "artist_delete">Delete</button>
            <button name="btnDetailArtist" id = "artistDetail${artist.id}" class = "artist_detail">detail</button>
        </li>`;
    }).join('')}
    </ol>`
}
   


export function AddArtist(){
    
    const AddNewArtist = document.getElementById("btnAddArtist");
  
AddNewArtist.addEventListener("click",function(){ console.log("Add artist kick");

const newArtist ={
 name: document.getElementById("ArtistName").value
 
}

apiActions.postRequest(CONSTANTS.artistURL, newArtist, artists => {
    console.log(artists);
    // artists.length()
 CONSTANTS.Title.innerText = `Artist is added`;
 CONSTANTS.Content.innerHTML =DisplayArtists(artists);
         SetupDeleteButton();
         SetupEditButton();
         SetupDetailButton();
});
});}

export function SetupDeleteButton() {
  let artistDeleteBtn = document.querySelectorAll(".artist_delete");
  artistDeleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let currentId = button.id.replace("artistDelete", "");
      apiActions.deleteRequest(CONSTANTS.artistURL, currentId, (data) => {
        console.log("artist delete button clicked");
        CONSTANTS.Content.innerHTML = DisplayArtists(data);
        SetupDeleteButton();
        SetupEditButton();
        SetupDetailButton();
      });
    });
  });
}

export function SetupEditButton() {
  let artistEditBtn = document.querySelectorAll(".artist_edit");
  artistEditBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let currentId = button.id.replace("artistEdit", "");
      apiActions.getSingleRequest(CONSTANTS.artistURL, currentId, (data) => {
        CONSTANTS.Content.innerHTML = artist.EditArtist(data);
        artist.SetupSaveButton(data.id);
      });
    });
  });
}

export function SetupDetailButton() {
  let artistDetailBtn = document.querySelectorAll(".artist_detail");
  artistDetailBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let currentId = button.id.replace("artistDetail", "");
      apiActions.getSingleRequest(CONSTANTS.artistURL, currentId, (data) => {
        CONSTANTS.Content.innerHTML = artist.DisplayArtist(data);
        SetupDeleteButton();
        SetupEditButton();
      });
    });
  });
}