async function init() {
  const {photographer} = await getPhotographer();
  await initmedia();
  displayHeader(photographer);
  modalName(photographer);
}
async function initmedia() {
  media = [];
  sortBy = list.children[0].children[0].innerText;
  mediaSection.innerHTML = "";
  await getMedia();;
  sortMedia();
  calcLike();
  displayData();
  likeEL();
  articlePicEL();
}

init();
