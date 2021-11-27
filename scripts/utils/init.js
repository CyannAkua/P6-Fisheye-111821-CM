async function init() {
  const { photographer } = await getPhotographer();
  await initmedia();
  displayHeader(photographer);
  modalName(photographer);
}
async function initmedia() {
  media = [];
  mediaSection.innerHTML = "";
  await getMedia();
  sortMedia();
  calcLike();
  displayData();
}

init();

sortList.addEventListener("change", initmedia);
