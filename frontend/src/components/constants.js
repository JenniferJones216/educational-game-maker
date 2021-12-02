export const artistURL = "https://localhost:44313/api/artist/";
export const albumURL = "https://localhost:44313/api/album/";
export const songURL = "https://localhost:44313/api/song/";
export const reviewURL = "https://localhost:44313/api/review/";
export const Content = document.getElementById("page content");
export const Title = document.getElementById("pageTitle");
export const Footer = document.getElementById("footerElement");

import apiActions from "../api/api-actions";
export const GetAllArtists = function() {
  apiActions.getRequest(artistURL, (artists) => {
    let ddlArtist = document.getElementById("ArtistId");

    console.log("list of artists" + artists);
    // ArtistList = data;
    artists.forEach((artist) => {
      let option = document.createElement("option");
      option.value = artist.id;
      option.text = artist.name;
      ddlArtist.appendChild(option);
    });
  });
};