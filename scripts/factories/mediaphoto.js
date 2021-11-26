function mediaFactory(data) {
  const { image, video } = data;

  const picture = `assets/Medias/${image}`;
  const mp4 = `assets/Medias/${video}`;
  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const vdo = document.createElement("video");
    if (video !== undefined) {
      vdo.setAttribute("src", mp4);
      article.appendChild(vdo);
    }
    if (image !== undefined) {
      img.setAttribute("src", picture);
      article.appendChild(img);
    }
    return article;
  }
  return { getUserCardDOM };
}
