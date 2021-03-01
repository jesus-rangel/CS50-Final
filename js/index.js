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

/* **** TIPPY INSTANCES */

tippy.setDefaultProps({ animation: "scale" });

tippy(".james", { content: "Morgan James" });

tippy(".jeanne", { content: "Jeanne de Clisson" });

tippy(".frazier", { content: "Joe Frazier" });

tippy(".churchill", { content: "Winston Churchill" });

tippy(".pizarnik", { content: "Alejandra Pizarnik" });

tippy(".ella", { content: "Ella Fitzgerald" });

tippy(".tina", { content: "Tina Chang" });

tippy(".coltrane", { content: "John Coltrane" });

tippy(".karr", { content: "Mary Karr" });

tippy("#chromium-browser", { content: "Download Chromium" });
