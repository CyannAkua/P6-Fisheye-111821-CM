const id = new URLSearchParams(window.location.search).get("id");
var photographers = "";
var thisPhotographer = "";
async function getPhotographers() {
  photographers = await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      return data.photographers;
    });
  return { photographers: photographers };
}
async function getPhotographer() {
  await getPhotographers();
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == id) {
      thisPhotographer = photographers[i];
      return { photographer: thisPhotographer };
    }
  }
}
async function displayHeader(photographer) {
  const photographerModel = photographerFactory(photographer);
  photographerModel.getUserCardDOM();
}

async function initphotographer() {
  // Récupère les datas des photographes
  const { photographer } = await getPhotographer();
  displayHeader(photographer);
}

initphotographer();
