import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import Artists from "./Artists";

// var Album = null;

export default {
  DisplayAlbum,
  EditAlbum,
  SetupSaveButton,
};

function DisplayAlbum(album) {
  // Album = album;
  if (album.reviews == null) {
    album.reviews = [];
  }
  if (album.songs == null) {
    album.songs = [];
  }

  return `
      <div class="details">
        <h3>${album.title}</h3>
         <button name="btnEditAlbum" id = "albumEdit${
           album.id
         }" class ="album_edit">Edit</button>

        <button name="btnDeleteAlbum" id = "albumDelete${
          album.id
        }" class = "album_delete">Delete</button>
        <h4>Songs</h4>
        <ul>
    
            ${album.songs
              .map((song) => {
                return `
                    <li>
                        ${song.title}
                    </li>
                `;
              })
              .join("")} </ul>
            <h4>Reviews</h4>
          <ul>
        ${album.reviews
          .map((review) => {
            return `
                    <li>
                        ${review.reviewContent}
                    </li>
                `;
          })
          .join("")}
        </ul>
      </div>
    `;
}

export function EditAlbum(album) {
  console.log("edit album page");
  return `
            <h3>${album.title}</h3>
            <input type="text" id = "albumArtistId${album.id}" style ="display:none" value = ${album.artistId}>
            <input type="text" name="Title" value="" id = "albumEditTitleInput${album.id}" placeholder = "enter a new title">
            <button id = "editSubmit${album.id}">Save</button>
    `;
}

export function SetupSaveButton(id) {
  let titleInput = document.getElementById(`albumEditTitleInput${id}`);
  let submitBtn = document.getElementById(`editSubmit${id}`);
  let artistId = document.getElementById(`albumArtistId${id}`).value;
  submitBtn.addEventListener("click", () => {
    console.log("clicked");
    let formBody = { Id: id, Title: titleInput.value, ArtistId: artistId };
    console.log(formBody);
    apiActions.putRequest(CONSTANTS.albumURL, id, formBody, (data) => {
      CONSTANTS.Content.innerHTML = DisplayAlbum(data);
      Artists.SetupEditButton();
      Artists.SetupDeleteButton();
    });
  });
}
// not used
//  export function SetupEditButton(){

//      let btnEdit = document.getElementById("btnEditAlbum");
//     btnEdit.addEventListener("click", function(){
//         console.log("edit button click");
//          CONSTANTS.Content.innerHTML = EditAlbum(album);
//          SetupSaveButton();
//     });
//  }
