title = document.querySelector("#title h1");

function getTitle() {
  if (window.innerWidth < 768) {
    title.innerHTML = "My heroes <br />&emsp;are weirdoes";
  } else {
    title.innerHTML = "My heroes are weirdoes";
  }
}

getTitle();

window.onresize = getTitle;
