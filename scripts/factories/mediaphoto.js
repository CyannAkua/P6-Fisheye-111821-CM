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
    const likeicon = document.createElement('img');
    h3.textContent = likes;
    likeicon.setAttribute("src", "assets/icons/likes.svg");
    likeicon.setAttribute("alt",likes + " Likes");
    likeicon.setAttribute("class","likeIcon");
    likeicon.setAttribute("tabindex","0");
    if (video !== undefined) {
      vdo.setAttribute("src", mp4);
      vdo.setAttribute("tabindex","0");
      article.appendChild(vdo);
    }
    if (image !== undefined) {
      img.setAttribute("src", picture);
      img.setAttribute("alt", title);
      img.setAttribute("tabindex","0");
      article.appendChild(img);
    }
    h2.textContent = title;
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(likeicon);
    return article;
  }
  return { getUserCardDOM };        
}
