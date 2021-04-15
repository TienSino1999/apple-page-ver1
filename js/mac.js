var arrGallery = document.getElementsByClassName("gallery-container");

function showGallery(index) {
  for (i = 0; i < arrGallery.length; i++) {
    arrGallery[i].style.display = "none";
  }
  arrGallery[index].style.display = "block";
}
showGallery(0);

var arrProAppsImg = document.getElementsByClassName("pro-apps-image");

function showProAppsImg(index) {
  for (i = 0; i < arrProAppsImg.length; i++) {
    arrProAppsImg[i].style.display = "none";
  }
  arrProAppsImg[index].style.display = "block";
}
showProAppsImg(0);

var arrContextApps = document.getElementsByClassName('context-pro-apps');

function showContextProApps(index) {
  for (i = 0; i < arrContextApps.length;  i++) {
    arrContextApps[i].style.display = 'none';
  }
  arrContextApps[index].style.display = 'block';
}
showContextProApps(2);



