let totalLike = "";
function calcLike() {
  let tempLike = 0;
  for (i = 0; i < media.length; i++) {
    tempLike = tempLike + media[i].likes;
    totalLike = tempLike;
  }
}
const likeIcons = document.getElementsByClassName("likeIcon");
function likeEL() {
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", addLike);
    likeIcons[i].addEventListener("keypress", addLike);
  }
}
function addLike(event) {
  updateLike(event.target, 1);
}

function removeLike(event) {
  updateLike(event.target, -1);
}

function updateLike(element, like) {
  let likeCounter = element.parentElement.childNodes[2];
  let tempLike = parseInt(likeCounter.innerText);
  tempLike = tempLike + like;
  likeCounter.innerText = tempLike.toString();
  const rEL = like == 1 ? addLike : removeLike;
  const aEL = like == 1 ? removeLike : addLike;
  element.parentElement.childNodes[3].setAttribute("alt", likeCounter.innerText + " Likes");
  element.removeEventListener("click", rEL);
  element.removeEventListener("keypress", rEL);
  element.addEventListener("click", aEL);
  element.addEventListener("keypress", aEL);
  const GLC = document.querySelector(".like-n-price .likes");
  let tempGLC = parseInt(GLC.innerText);
  tempGLC = tempGLC + like;
  GLC.textContent = tempGLC.toString();
}
