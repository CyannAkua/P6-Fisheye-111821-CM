function mediaFactory(data) {
  const { image, video, title, likes } = data;

  const picture = `assets/Medias/${image}`;
  const mp4 = `assets/Medias/${video}`;
  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const vdo = document.createElement("video");
    const h2 = document.createElement( 'h2' );
    const h3 = document.createElement( 'h3' );
    const likeicon = document.createElement('img')
    h2.textContent = title;
    h3.textContent = likes + ' ';
    likeicon.setAttribute("src", "assets/icons/likes.svg");
    if (video !== undefined) {
      vdo.setAttribute("src", mp4);
      article.appendChild(vdo);
    }
    if (image !== undefined) {
      img.setAttribute("src", picture);
      article.appendChild(img);
    }
    article.appendChild(h2)
    article.appendChild(h3)
    h3.appendChild(likeicon)
    return article;
  }
  return { getUserCardDOM };
}
