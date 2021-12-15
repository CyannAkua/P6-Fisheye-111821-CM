const lightboxBg = document.getElementsByClassName("lightbox_bg")[0];
const articlePic = document.getElementsByClassName("media-section")[0];
var currentTarget = [];
const previousArrow = document.getElementsByClassName("lightbox-previous")[0];
const nextArrow = document.getElementsByClassName("lightbox-next")[0];
const imageName = document.getElementsByClassName("image-name")[0];
const imageHold = document.getElementsByClassName("image-hold")[0];
const videoHold = document.getElementsByClassName("video-hold")[0];
const closeCross = document.getElementsByClassName("lightbox-close")[0];

function displayLightbox() {
  lightboxBg.style.display = "block";
}
function closeLightbox() {
  lightboxBg.style.display = "none";
}
closeCross.addEventListener("click", closeLightbox);
articlePic.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    currentTarget = e.target.parentElement;
    displayLightbox();
    pic();
  }
});
//lightboxBg.children[0].addEventListener("click", (e) => {
//if (e.target !== e.currentTarget) {
//} else {
//closeLightbox();
//}
//});
previousArrow.addEventListener("click", (e) => {
  currentTarget = currentTarget.previousSibling;
  pic();
});
nextArrow.addEventListener("click", (e) => {
  currentTarget = currentTarget.nextSibling;
  pic();
});
function pic() {
    if(currentTarget.firstChild.tagName == 'VIDEO'){
        videoHold.src = currentTarget.children[0].src;
        videoHold.style.display = "block";
        imageHold.style.display = "none";
        imageName.innerText = "";
    }
  else {imageHold.style.display="";
  videoHold.style.display = "none";
  imageHold.src = currentTarget.children[0].src;
  imageHold.alt = currentTarget.children[1].innerText; 
  imageName.innerText = currentTarget.children[1].innerText;}
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
