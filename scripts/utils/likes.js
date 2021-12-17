let totalLike = "";
function calcLike() {
    let tempLike = 0;
    for (i = 0; i < media.length; i++) {
      tempLike = tempLike + media[i].likes;
      totalLike = tempLike;
    }
  }
const likeIcons = document.getElementsByClassName("likeIcon")
function likeEL(){
    for(let i = 0; i < likeIcons.length; i++) {
        likeIcons[i].addEventListener('click',addLike)
        likeIcons[i].addEventListener('keypress',addLike)
}}
function addLike(event) {
    let likeCounter = event.target.parentElement.childNodes[2]
    let tempLike = parseInt(likeCounter.innerText)
    tempLike = tempLike + 1;
    likeCounter.innerText = tempLike.toString();
    event.target.parentElement.childNodes[3].setAttribute("alt",likeCounter.innerText + " Likes");
    event.target.removeEventListener('click',addLike)
    event.target.removeEventListener('keypress',addLike)
    event.target.addEventListener('click',removeLike)
    event.target.addEventListener('keypress',removeLike)
    const GLC = document.querySelector(".like-n-price .likes") 
    let tempGLC = parseInt(GLC.innerText)
    tempGLC = tempGLC + 1
    GLC.textContent = tempGLC.toString()
}

function removeLike(event) {
    let likeCounter = event.target.parentElement.childNodes[2]
    let tempLike = parseInt(likeCounter.innerText)
    tempLike = tempLike - 1;
    likeCounter.innerText = tempLike.toString();
    event.target.parentElement.childNodes[3].setAttribute("alt",likeCounter.innerText + " Likes");
    event.target.removeEventListener('click',removeLike)
    event.target.removeEventListener('keypress',removeLike)
    event.target.addEventListener('click',addLike)
    event.target.addEventListener('keypress',addLike)
    const GLC = document.querySelector(".like-n-price .likes") 
    let tempGLC = parseInt(GLC.innerText)
    tempGLC = tempGLC - 1
    GLC.textContent = tempGLC.toString()
}