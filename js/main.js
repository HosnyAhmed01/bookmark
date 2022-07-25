let burger = document.querySelector(".burger");
let nav = document.querySelector(".right-nav");
let tabs = document.querySelectorAll(".tabs-holder .tab");
let quses = document.querySelectorAll(".quses .qus");

let image = document.querySelector(".book-mark .holder .right img");
let h1 = document.querySelector(".book-mark .holder .left h1");
let paragraph = document.querySelector(".book-mark .holder .left p");

let info = {
  img1: {
    src: "images/illustration-features-tab-1.svg",
    h1: "Bookmark in one click",
    p: `Organize your bookmarks however you like. Our simple
    drag-and-drop interface gives you complete control over how you
    manage your favourite sites.`,
  },
  img2: {
    src: "images/illustration-features-tab-2.svg",
    h1: `Intelligent search`,
    p: `Our powerful search feature will help you find saved sites in no time at all. 
    No need to trawl through all of your bookmarks. `,
  },
  img3: {
    src: "images/illustration-features-tab-3.svg",
    h1: "Share your bookmarks",
    p: ` Easily share your bookmarks and collections with others. Create a shareable 
    link that you can send at the click of a button.`,
  },
};

// expand the navbar
burger.addEventListener("click", () => {
  if (burger.getAttribute("aria-expanded") == "false") {
    burger.setAttribute("aria-expanded", "true");
    nav.style.transform = "translateY(0)";
  } else {
    burger.setAttribute("aria-expanded", "false");
    nav.style.transform = "translateY(-100vh)";
  }
});
// switch between tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    console.log(tab.dataset.active);
    if (tab.dataset.active == "img1") {
      image.src = info.img1.src;
      h1.textContent = info.img1.h1;
      paragraph.textContent = info.img1.p;
    } else if (tab.dataset.active == "img2") {
      image.src = info.img2.src;
      h1.textContent = info.img2.h1;
      paragraph.textContent = info.img2.p;
    } else {
      image.src = info.img3.src;
      h1.textContent = info.img3.h1;
      paragraph.textContent = info.img3.p;
    }
    tab.classList.add("active");
  });
});

// expand q and a

quses.forEach((qus) => {
  qus.addEventListener("click", () => {
    if (qus.nextElementSibling.style.display == "block") {
      qus.nextElementSibling.style.display = "none";
      qus.classList.remove("opend");
    } else {
      qus.classList.add("opend");
      qus.nextElementSibling.style.display = "block";
    }
  });
});
