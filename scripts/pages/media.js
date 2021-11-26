let medias = "";
let media = [];
async function getMedia() {
  medias = await getData("media");
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId == id) {
      media.push(medias[i]);
    }
  }
  return media;
}
async function displayData() {
  const mediaSection = document.querySelector(".media-section");

  media.forEach((_media) => {
    const mediaModel = mediaFactory(_media);
    const mediaCardDOM = mediaModel.getUserCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}
async function init() {
  await getMedia();
  displayData();
}
init();