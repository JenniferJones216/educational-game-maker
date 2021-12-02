import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";
import Album, { EditAlbum } from "./album";
import album from "./album";
import header from "./header";

export default {
  DisplayAlbums,
  AddAlbum,
  SetupDeleteButton,
  SetupEditButton,
  SetupDetailButton,
};

export function DisplayAlbums(data) {
  return `
      <section class='addOwner'>
      <h3>Add a New Album</h3>
    <label><strong>Name:</strong></label>
    <input type='text' id='AlbumName' placeholder='New Album Name' />
    <div class="custom-select">
    <label><strong>Artist:</strong></label>
    <select id="ArtistId">
    <option selected disabled>---Select Artist---</option>
    </select>
  </div>
      <button id='btnAddAlbum'>Add Album</button>
</section>
  <ol>
    ${data
      .map((album) => {
        return `<li class="albumList">
            <h3>${album.title}</h3>
            <button name="btnEditAlbum" id = "albumEdit${album.id}" class ="album_edit">Edit</button>
            <input type="text" id = "albumsArtistId${album.id}" style ="display:none" value = ${album.artistId}>
            <button name="btnDeleteAlbum" id = "albumDelete${album.id}" class = "album_delete">Delete</button>
            <button name="btnDetailAlbum" id = "albumDetail${album.id}" class = "album_detail">Details</button>
        </li>`;
      })
      .join("")}
    </ol>`;
}

export function AddAlbum() {
  const AddNewAlbum = document.getElementById("btnAddAlbum");

  AddNewAlbum.addEventListener("click", function () {
    console.log("Add album kick");

    const newAlbum = {
      title: document.getElementById("AlbumName").value,
      artistId: document.getElementById("ArtistId").value,
    };
    apiActions.postRequest(CONSTANTS.albumURL, newAlbum, (data) => {
      CONSTANTS.Title.innerText = "Album Details";
      CONSTANTS.Content.innerHTML = album.DisplayAlbum(data);
      SetupEditButton();
      SetupDeleteButton();
    });
  });
}

export function SetupEditButton() {
  let albumEditBtn = document.querySelectorAll(".album_edit");
  albumEditBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let currentId = button.id.replace("albumEdit", "");
      apiActions.getSingleRequest(CONSTANTS.albumURL, currentId, (data) => {
        CONSTANTS.Content.innerHTML = album.EditAlbum(data);
        album.SetupSaveButton(data.id);
      });
    });
  });
}

export function SetupDeleteButton() {
  let albumDeleteBtn = document.querySelectorAll(".album_delete");
  albumDeleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let currentId = button.id.replace("albumDelete", "");
      apiActions.deleteRequest(CONSTANTS.albumURL, currentId, (data) => {
        CONSTANTS.Content.innerHTML = DisplayAlbums(data);
        CONSTANTS.GetAllArtists();
        SetupDeleteButton();
        SetupEditButton();
        SetupDetailButton();
      });
    });
  });
}

export function SetupDetailButton() {
  let albumDetailBtn = document.querySelectorAll(".album_detail");
  albumDetailBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let currentId = button.id.replace("albumDetail", "");
      apiActions.getSingleRequest(CONSTANTS.albumURL, currentId, (data) => {
        CONSTANTS.Content.innerHTML = album.DisplayAlbum(data);
        SetupDeleteButton();
        SetupEditButton();
      });
    });
  });
}
