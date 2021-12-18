const id = new URLSearchParams(window.location.search).get("id");
var photographers = "";
var thisPhotographer = "";

async function getPhotographer() {
  photographers = await getData("photographers");
  for (let i = 0; i < photographers.length; i++){
    if (photographers[i].id == id) {
      thisPhotographer = photographers[i];
      return {photographer : thisPhotographer};
    }
  }
}

async function displayHeader(photographer) {
  const photographerModel = photographerFactory(photographer);
  photographerModel.getPhotoCardDOM();
}