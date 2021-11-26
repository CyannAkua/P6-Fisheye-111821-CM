var medias = "";
var thisMedia = "";
const media = [];
async function getMedias() {
  medias = await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      return data.media;
    });
  return { medias: medias };
}
async function getMedia() {
  await getMedias();
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId == id) {
      thisMedia = medias[i];
      media.push(thisMedia);
    }
  }
  return media;
}
async function displayData() {
  const mediaSection = document.querySelector(".media-section");

  for (let i = 0; i < media.length; i++) {
    const mediaModel = mediaFactory(media[i]);
    const mediaCardDOM = mediaModel.getUserCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  }
}
async function init() {
  await getMedia();
  displayData();
}
init();
