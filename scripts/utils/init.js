async function init() {

  }

  async function init() {
    const { photographer } = await getPhotographer();
    media = [];
    mediaSection.innerHTML = "";
    await getMedia();
    sortMedia()
    calcLike()
    displayHeader(photographer);
    displayData();
    modalName(photographer);
    console.log(media)
  }
init()