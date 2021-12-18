const lightboxBg = document.getElementsByClassName("lightbox_bg")[0];
const articlePic = document.getElementsByClassName("media-section")[0];
var currentTarget = [];
const previousArrow = document.getElementsByClassName("lightbox-previous")[0];
const nextArrow = document.getElementsByClassName("lightbox-next")[0];
const imageName = document.getElementsByClassName("image-name")[0];
const imageHold = document.getElementsByClassName("image-hold")[0];
const videoHold = document.getElementsByClassName("video-hold")[0];
const closeCross = document.getElementsByClassName("lightbox-close")[0];

window.addEventListener("keydown", keyListener, true);

function keyListener(event) {
  if (event.code == "ArrowLeft") {
    if (currentTarget.previousSibling !== null) {
      event.preventDefault();
      PreviousPic();
    }
  }
  if (event.code == "ArrowRight") {
    if (currentTarget.nextSibling !== null) {
      event.preventDefault();
      NextPic();
    }
  }
  if (event.code == "Escape") {
    event.preventDefault();
    closeLightbox();
  }
}

function displayLightbox() {
  lightboxBg.style.display = "block";
}
function closeLightbox() {
  lightboxBg.style.display = "none";
}

function articlePicEL() {
  for (let i = 0; i < articlePic.children.length; i++) {
    articlePic.children[i].children[0].addEventListener(
      "keypress",
      runLightbox
    );
    articlePic.children[i].children[0].addEventListener("click", runLightbox);
  }
}

closeCross.addEventListener("click", closeLightbox);

function runLightbox(event) {
  currentTarget = event.target.parentElement;
  console.log(currentTarget);
  displayLightbox();
  pic();
}
previousArrow.addEventListener("click", PreviousPic);
function PreviousPic() {
  currentTarget = currentTarget.previousSibling;
  pic();
}
nextArrow.addEventListener("click", NextPic);
function NextPic() {
  currentTarget = currentTarget.nextSibling;
  pic();
}
function pic() {
  if (currentTarget.firstChild.tagName == "VIDEO") {
    videoHold.src = currentTarget.children[0].src;
    videoHold.style.display = "block";
    imageHold.style.display = "none";
    imageName.innerText = "";
  } else {
    imageHold.style.display = "";
    videoHold.style.display = "none";
    imageHold.src = currentTarget.children[0].src;
    imageHold.alt = currentTarget.children[1].innerText;
    imageName.innerText = currentTarget.children[1].innerText;
  }
  checkArrow();
}

function checkArrow() {
  if (currentTarget.nextSibling === null) {
    nextArrow.style.display = "none";
  } else {
    nextArrow.style.display = "";
  }
  if (currentTarget.previousSibling === null) {
    previousArrow.style.display = "none";
  } else {
    previousArrow.style.display = "";
  }
}
